import React from 'react';
export const MainContext = React.createContext(undefined as any)
export class MainProvider extends React.Component {
    constructor(props:any){
        super(props)
        this.state = {
        favoritesData:this.onStart(),
        searchData:[],
        modalStatus:false
        }
      }
      onStart: ()=>Array<Object> = ()=>{
        const startingData = localStorage.getItem('favorites')
        if(startingData){
          return JSON.parse(startingData)
        } else {
          return []
        }
      }
      onSearch: (searchData:Array<Object>)=>void = (searchData) => {
        this.setState({searchData})
      }
      favoritesDataSetter: (favoritesData:Array<Object>)=>void = (favoritesData) =>{
        const dataForLocal = JSON.stringify(favoritesData)
        this.setState({favoritesData},()=>{localStorage.setItem('favorites',dataForLocal)})
      }
      render(){
          return(
            <MainContext.Provider value={{
                state:this.state,
                onSearch:this.onSearch,
                favoritesDataSetter:this.favoritesDataSetter
            }}>
                {this.props.children}
            </MainContext.Provider>
          );
      }
}