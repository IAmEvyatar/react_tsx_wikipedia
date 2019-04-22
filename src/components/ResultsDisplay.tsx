import React, { Component } from 'react';
import { request } from 'http';
interface IResultsDisplayProps {data:any,displaySwitch:number}

export class ResultsDsiplay extends Component<IResultsDisplayProps> {
searchResults = ()=>{
        const searchResults = this.props.data.query.search.map((el:any,i:number)=>{
            const URLParameter: string = el.title.split(" ").join("_")
            const titleURL: string = `https://en.wikipedia.org/wiki/${URLParameter}`
            return(
            <div key={i}>
                <h2><a target="_blank" href={titleURL}>{el.title}</a><span className="badge badge-primary">{el.wordcount}</span></h2>
                <input className="star" type="checkbox" title="bookmark-page"/>
                <p dangerouslySetInnerHTML={{
                    __html:el.snippet
                }}></p>
            </div>
            )
        })
        return searchResults
       }
    render(){   
        switch(this.props.displaySwitch) {
            case 0: return <div>Search Something!</div>;
            case 1: return this.searchResults();
        }
    }
}