import React, { Component } from 'react';
import { request } from 'http';
interface ISearchResultsProps {data:any}

export class SearchResults extends Component<ISearchResultsProps> {
    render(){
        if(this.props.data.query){
            const a = this.props.data.query.search.map((el: any,i:number)=>{
                const URLParameter = el.title.split(" ").join("_")
                const titleURL = `https://en.wikipedia.org/wiki/${URLParameter}`
                return(
                <div key={i}>
                    <h2><a target="_blank" href={titleURL}>{el.title}</a><span className="badge badge-primary">{el.wordcount}</span></h2>
                    <p dangerouslySetInnerHTML={{
                        __html:el.snippet
                    }}></p>
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