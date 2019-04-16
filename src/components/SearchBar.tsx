import React, { Component } from 'react';
export interface IFormProps {onSearch: (e:React.FormEvent<HTMLFormElement>)=>void;}
export class SearchBar extends Component<IFormProps> {
    render(){
        return(
            <form action="" onSubmit={this.props.onSearch}>
              <input type="text" name="searchQuery"/>
              <button type="submit">submit</button>
            </form>
        )
    }
}