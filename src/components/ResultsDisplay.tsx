import React, { Component } from 'react';
import { request } from 'http';
interface IResultsDisplayProps {data:any}

export class ResultsDsiplay extends Component<IResultsDisplayProps> {
    render(){
        if(this.props.data.query){
            const a = this.props.data.query.search.map((el: any,i:number)=>{
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