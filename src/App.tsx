import React, { Component, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import {SearchBar} from './components/SearchBar'
export interface AppState {data: string;}

class App extends Component<any, any> {
  constructor(props: any){
    super(props)
    this.state = {
    searchUrl: "default"
    }
  }
onSearch = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  let target = e.currentTarget.searchQuery.value;
  this.setState({searchUrl:target})
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
            <main className="content-section">
              <SearchBar onSearch={this.onSearch}/>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
