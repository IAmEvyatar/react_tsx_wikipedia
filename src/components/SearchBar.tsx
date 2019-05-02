import React, { Component } from 'react';
interface IFormProps {onSearch:(data:Array<Object>)=>any}
export class SearchBar extends Component<IFormProps> {
render(){
        return(
            <form action="" onSubmit={this.formHandler}>
              <input className="form-control" type="text" name="searchQuery"/>
              <button className="btn btn-success" type="submit">submit</button>
            </form>
        )
    }
    formHandler: (e: React.FormEvent<HTMLFormElement>)=>void = (e)=>{
        e.preventDefault();
        const searchQuery = e.currentTarget.searchQuery.value;
        const searchURL = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json`
        fetch(searchURL)
        .then((res)=>res.json())
        .then((res)=> this.props.onSearch(res.query.search)).catch(console.log)
    }
}