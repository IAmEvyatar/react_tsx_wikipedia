import React, { Component, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import {SearchBar} from './components/SearchBar'
import {ResultsDisplay} from './components/ResultsDisplay'
import Button from 'react-bootstrap/Button'
interface IAppState {
  favoritesData:Array<Object>,
  searchData:Array<Object>,
  modalStatus:boolean
}
class App extends Component<{},IAppState> {
  constructor(props:any){
    super(props)
    this.state = {
    favoritesData:[],
    searchData:[],
    modalStatus:false
    }
  }

// showFavoritesButtonHandler: ()=>void =()=>{

// }

  render() {
    return (
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <header className="head-section">
              <h1>This is Evyatar's React Wiki search!</h1>
              {/* This is the searchbar area */}
            </header>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <aside className="content-section">
              <SearchBar onSearch={this.onSearch}/>  
              <Button color="#efefef" onClick={()=>{this.setState({modalStatus:true})}}>Click me</Button>
                <button type="button" className="btn btn-warning" >
                  Favorites
                </button>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <ResultsDisplay currentDisplay={this.state.searchData} favoritesDataSetter={this.favoritesDataSetter} favoritesData={this.state.favoritesData}/>
          </div>
        </div>
      </div>
    )
  }
showModal: ()=>void = () => {this.setState({modalStatus:false})}

onSearch: (searchData:Array<Object>)=>void = (searchData) => {
  this.setState({searchData})
}
favoritesDataSetter: (favoritesData:Array<Object>)=>void = (favoritesData)=>{
  const dataForLocal = JSON.stringify(favoritesData)
  this.setState({favoritesData},()=>{localStorage.setItem('favorites',dataForLocal)})
}
}


export default App;
