import React from 'react';

interface IMainContextState {
  favoritesData: any;
  searchData: Object[];
  modalStatus: boolean;
}

export interface IMainContext {
  state: IMainContextState;
  onSearch(searchData: Object[]): void;
  favoritesDataSetter(favoritesData: Object[]): void;
}
export const MainContext = React.createContext<IMainContext>(undefined as any);
export class MainProvider extends React.Component<any, IMainContextState> {
    constructor(props:any){
        super(props);
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
        const dataForLocal = JSON.stringify(favoritesData);
        this.setState({favoritesData},()=>{localStorage.setItem('favorites',dataForLocal)})
      }
      render(){
          return(
            <MainContext.Provider value={{
                state: this.state,
                onSearch:this.onSearch,
                favoritesDataSetter:this.favoritesDataSetter
            }}>
                {this.props.children}
            </MainContext.Provider>
          );
      }
}
