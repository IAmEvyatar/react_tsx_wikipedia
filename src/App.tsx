import React, { Component, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import {MainProvider} from './components/MainContext'
import { MainContext } from './components/MainContext'
import {SearchBar} from './components/SearchBar'
import {ResultsDisplay} from './components/ResultsDisplay'
import {Modal,Button,Container,Row,Col} from 'react-bootstrap'

interface IAppState {
  modalStatus:boolean
}
class App extends Component<{},IAppState> {
  constructor(props:any){
    super(props)
    this.state = {
    modalStatus:false
    }
  }


  render() {
    return (
<MainProvider>
  <MainContext.Consumer>
{(context):any =>{
return(<Container>
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
              <SearchBar onSearch={context.onSearch}/>  
              <Button variant="warning" onClick={()=>{this.showModal()}}>Favorites</Button>
            </aside>
          </Col>
        </Row>
        <Row>          
            <Col>
              <ResultsDisplay currentDisplay={context.state.searchData} defaultChecked={false}/>
          </Col>
        </Row>
        <Modal show={this.state.modalStatus}>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ResultsDisplay currentDisplay={context.state.favoritesData} defaultChecked={true}/>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
</Container>)}
}
      </MainContext.Consumer>
</MainProvider>
    )
  }
showModal: ()=>void = () => {this.setState({modalStatus:true})}
closeModal: ()=>void = () => {this.setState({modalStatus:false})}

}


export default App;
