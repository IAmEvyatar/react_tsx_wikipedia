import React, { Component } from 'react';
import {MainContext} from './MainContext'
interface IFormProps {onSearch:(data:Array<Object>)=>any}
export class SearchBar extends Component<IFormProps> {
render(){
        return(
            <MainContext.Consumer>
                {context => 
                    <form className="my-form" action="" onSubmit={this.formHandlerMaker(context)}>
                        <input className="form-control searchbar-input" type="text" name="searchQuery"/>
                        <button className="btn btn-success" type="submit">submit</button>
                    </form>
                }
            </MainContext.Consumer>
        )
    }
    // (e: React.FormEvent<HTMLFormElement>)=>void
    formHandlerMaker:any  = (context:any) =>{
    return (
        (e:any)=>{
        e.preventDefault();
        const searchQuery = e.currentTarget.searchQuery.value;
        const searchURL = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json`
        fetch(searchURL)
        .then((res)=>res.json())
        .then((res)=> context.onSearch(res.query.search))
        .catch(console.log)
    })}
}