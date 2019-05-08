import React, { Component } from 'react';
import { request } from 'http';
import { FavoritesButton } from './Checkbox';
export interface IResultsDisplayProps {
    currentDisplay:Array<Object>,
    favoritesData:Array<Object>,
    favoritesDataSetter:(favoritesData:Array<Object>)=>void,
    checked:boolean
}

export class ResultsDisplay extends Component<IResultsDisplayProps> {

    render(){
        return <div>{this.resultDisplay()}</div>
    }
    checkboxAfterVerification:any = (favoritesData:Array<Object>,favoritesDataSetter:(favoritesData:Array<Object>)=>void,currentElement:any,checked:boolean)=>{ 
    if(!checked){
        console.log(favoritesData)
        const isFavorite = favoritesData.findIndex((favel:any)=>favel.titleURL === currentElement.titleURL)
        return isFavorite >= 0 ? <FavoritesButton favoritesData={favoritesData} favoritesDataSetter={favoritesDataSetter} currentElement={currentElement} checked={true}/> : <FavoritesButton favoritesData={favoritesData} favoritesDataSetter={favoritesDataSetter} currentElement={currentElement} checked={false}/>
    } else {
        return <FavoritesButton favoritesData={favoritesData} favoritesDataSetter={favoritesDataSetter} currentElement={currentElement} checked={true}/> }
    }
    
    resultDisplay = ()=>{
        const {currentDisplay,favoritesData,favoritesDataSetter,checked} = this.props
            if(currentDisplay.length > 0){
                const resultDsiplay:Array<Object> = currentDisplay.map((el:any)=>{
                const URLParameter: string = el.title.split(" ").join("_");
                el.titleURL = `https://en.wikipedia.org/wiki/${URLParameter}`;
                return(
                    <div className="yo" key={el.titleURL}>
                    <h2><a target="_blank" href={el.titleURL}>{el.title}</a><span className="badge badge-primary">{el.wordcount}</span></h2>
                    {this.checkboxAfterVerification(favoritesData,favoritesDataSetter,el,checked)}
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
        
       
