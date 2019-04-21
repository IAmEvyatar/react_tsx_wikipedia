import React, { Component } from 'react';
import { request } from 'http';
interface ISearchResultsProps {data:any}

export class SearchResults extends Component<ISearchResultsProps> {
    render(){
        if(this.props.data.query){
            const a = this.props.data.query.search.map((el: any)=>{return(
                <div>
                    {el.title}
                </div>
            )})
            return(
               <div>
                   {a}
               </div>
            )
        } else {
            return <div>Search something!</div>
        } 
    }
}