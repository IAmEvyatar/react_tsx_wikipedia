import React, { Component, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import {SearchBar} from './components/SearchBar'
import {ResultsDsiplay} from './components/ResultsDisplay'
class App extends Component<{},{data:Object,favorites:Array<Object>,displaySwitch:number}> {
  constructor(props: any){
    super(props)
    this.state = {
    data:{},
    favorites:[],
    displaySwitch:0
    }
  }

onSearch: (data:Object,displaySwitch:number)=>void = (data,displaySwitch) => {
  this.setState({data,displaySwitch})
}
favoritesHandler: (displaySwitch:number)=>void = (displaySwitch)=>{
  this.setState({displaySwitch})
}

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
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <ResultsDsiplay data={this.state.data} displaySwitch={this.state.displaySwitch}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
