import React,{ Component } from 'react';
import { MainContext } from './MainContext'

export interface IFavoriteProps {
    currentElement:any,
    defaultChecked:boolean
}
interface IFavoriteState {
    checked:boolean;
}
export class FavoritesButton extends Component<IFavoriteProps,IFavoriteState> {
    constructor(props:any){
        super(props)
        this.state = {
            checked:props.defaultChecked
        }
    }
    render(){
        return(
            <MainContext.Consumer>
                {context => <div className="hey"><input className="star" type="checkbox" onChange={()=>{this.favoritesButtonHandler(context)}} checked={this.state.checked} title="bookmark-page"/></div>}
            </MainContext.Consumer>
        )
    }
    favoritesButtonHandler: (context:any)=>any = (context)=>{
        this.setState({checked:!this.state.checked},
        ()=>{
            const {currentElement} = this.props
            if(this.state.checked){
                    const copyOfFavorites: any = [...context.state.favoritesData]
                    copyOfFavorites.push(currentElement);
                    console.log('1')
                    return context.favoritesDataSetter(copyOfFavorites)
            }else{
                    let copyOfFavorites: any = [...context.state.favoritesData]
                    let indexToSlice = copyOfFavorites.findIndex( (el:any) => el.title === currentElement.title)
                    console.log(copyOfFavorites,indexToSlice)
                    copyOfFavorites.splice(indexToSlice,1)
                    console.log(copyOfFavorites)
                    return context.favoritesDataSetter(copyOfFavorites)
            }
        }
        )
       
      }
    }
