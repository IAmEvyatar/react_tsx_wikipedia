import React, { Component, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import {SearchBar} from './components/SearchBar'
import {ResultsDisplay} from './components/ResultsDisplay'
import {Modal,Button,Container,Row,Col} from 'react-bootstrap'
interface IAppState {
  favoritesData:Array<Object>,
  searchData:Array<Object>,
  modalStatus:boolean
}
class App extends Component<{},IAppState> {
  constructor(props:any){
    super(props)
    this.state = {
    favoritesData:this.onStart(),
    searchData:[],
    modalStatus:false
    }
  }


  render() {
    return (
      
  <Container>
        <Row>
          <Col>
            <header className="head-section">
              <h1>This is Evyatar's React Wiki search!</h1>
            </header>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <aside className="content-section">
              <SearchBar onSearch={this.onSearch}/>  
              <Button variant="warning" onClick={()=>{this.showModal()}}>Favorites</Button>
            </aside>
          </Col>
        </Row>
        <Row>          
            <Col>
              <ResultsDisplay currentDisplay={this.state.searchData} favoritesDataSetter={this.favoritesDataSetter} favoritesData={this.state.favoritesData} checked={false}/>
          </Col>
        </Row>
        <Modal show={this.state.modalStatus}>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ResultsDisplay currentDisplay={this.state.favoritesData} favoritesDataSetter={this.favoritesDataSetter} favoritesData={this.state.favoritesData} checked={true}/>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
      </Container>
    )
  }
onStart: ()=>Array<Object> = ()=>{
  const startingData = localStorage.getItem('favorites')
  if(startingData){
    return JSON.parse(startingData)
  } else {
    return []
  }
}
showModal: ()=>void = () => {this.setState({modalStatus:true})}
closeModal: ()=>void = () => {this.setState({modalStatus:false})}

onSearch: (searchData:Array<Object>)=>void = (searchData) => {
  this.setState({searchData})
}
favoritesDataSetter: (favoritesData:Array<Object>)=>void = (favoritesData) =>{
  const dataForLocal = JSON.stringify(favoritesData)
  this.setState({favoritesData},()=>{localStorage.setItem('favorites',dataForLocal)})
}
}


export default App;
