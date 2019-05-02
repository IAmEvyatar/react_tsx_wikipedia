import React, { Component } from 'react';
import { request } from 'http';
import { FavoritesButton } from './Checkbox';
export interface IResultsDisplayProps {
    currentDisplay:Array<Object>,
    favoritesData:Array<Object>,
    favoritesDataSetter:(favoritesData:Array<Object>)=>void
}

export class ResultsDisplay extends Component<IResultsDisplayProps> {

    render(){
        return <div>{this.resultDisplay()}</div>
    }
    resultDisplay:()=>any = ()=>{
        const {currentDisplay,favoritesData,favoritesDataSetter} = this.props
            if(currentDisplay.length > 0){
                const resultDsiplay:Array<Object> = currentDisplay.map((el:any)=>{
                    const URLParameter: string = el.title.split(" ").join("_");
                    el.titleURL = `https://en.wikipedia.org/wiki/${URLParameter}`;
                    return(
                        <div className="yo" key={el.titleURL}>
                            <h2><a target="_blank" href={el.titleURL}>{el.title}</a><span className="badge badge-primary">{el.wordcount}</span></h2>
                            <FavoritesButton favoritesData={favoritesData} favoritesDataSetter={favoritesDataSetter} currentElement={el}/> 
                            <p dangerouslySetInnerHTML={{__html:el.snippet}}></p>
                        </div>
                    )
                })
            return resultDsiplay
        } else {
            return <div>hi</div>
        }
    }   
}
        
       
