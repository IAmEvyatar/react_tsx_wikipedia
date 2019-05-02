import React,{ Component } from 'react';

export interface IFavoriteProps {
    favoritesDataSetter:(favoritesData:Array<Object>)=>void,
    favoritesData:Array<Object>,
    currentElement:any
}
interface IFavoriteState {
    checked:boolean;
}
export class FavoritesButton extends Component<IFavoriteProps,IFavoriteState> {
    constructor(props:any){
        super(props)
        this.state = {
            checked:false
        }
    }
    render(){
        return(
            <input className="star" type="checkbox" onClick={this.favoritesButtonHandler}
            title="bookmark-page"/>
        )
    }
    favoritesButtonHandler: ()=>any = async ()=>{
        await this.setState({checked:!this.state.checked})
        const {favoritesData,favoritesDataSetter,currentElement} = this.props
        if(this.state.checked){
                const copyOfFavorites: any = [...favoritesData]
                copyOfFavorites.push(currentElement);
                console.log('1')
                return favoritesDataSetter(copyOfFavorites)
        }else{
                let copyOfFavorites: any = [...favoritesData]
                let indexToSlice = copyOfFavorites.findIndex( (el:any) => el.title === currentElement.title)
                console.log(copyOfFavorites,indexToSlice)
                copyOfFavorites.splice(indexToSlice,1)
                console.log(copyOfFavorites)
                return favoritesDataSetter(copyOfFavorites)
        }
      }
    }
