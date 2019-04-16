import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
export interface AppState {data: string;}

class App extends Component<any, any> {
  constructor(props: any){
    super(props)
    this.state = {
    data: "default"
    }
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
              {/* This is the search results area */}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
