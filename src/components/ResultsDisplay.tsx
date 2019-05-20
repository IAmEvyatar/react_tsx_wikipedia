import React, { Component } from 'react';
import { MainContext } from './MainContext'
import { request } from 'http';
import { FavoritesButton } from './Checkbox';
export interface IResultsDisplayProps {
    currentDisplay:Array<Object>,
    defaultChecked:boolean,
    favoritesData:Array<Object>
}
export interface IResultsDisplayState {
    favoritesData:Array<Object>
}

    export class ResultsDisplay extends Component<IResultsDisplayProps,IResultsDisplayState> {
        constructor(props:any){
            super(props)
            this.state = {
                favoritesData:props.favoritesData,
            }
        }
        render(){
            return(
        <MainContext.Consumer>
            { context => <div>{this.resultDisplay(context)}</div> }
        </MainContext.Consumer>
        )}
        
        checkboxAfterVerification:(context:any,currentElement:any,defaultChecked:boolean)=>any = (context,currentElement,defaultChecked)=>{ 
        if(!defaultChecked){
            const isFavorite = this.state.favoritesData.findIndex((favel:any)=>favel.titleURL === currentElement.titleURL)
            return isFavorite >= 0 ? <FavoritesButton  currentElement={currentElement} defaultChecked={true}/> : <FavoritesButton  currentElement={currentElement} defaultChecked={false}/>
        } else {
            return <FavoritesButton  currentElement={currentElement} defaultChecked={true}/> }
        }
        
        resultDisplay:(context:any)=>any = (context)=>{
            const {currentDisplay,defaultChecked} = this.props
                if(currentDisplay.length > 0){
                    const resultDsiplay:Array<Object> = currentDisplay.map((el:any)=>{
                    const URLParameter: string = el.title.split(" ").join("_");
                    el.titleURL = `https://en.wikipedia.org/wiki/${URLParameter}`;
                    return(
                        <div className="yo" key={el.titleURL}>
                        <h2><a target="_blank" href={el.titleURL}>{el.title}</a><span className="badge badge-primary">{el.wordcount}</span></h2>
                        {this.checkboxAfterVerification(context,el,defaultChecked)}
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
        
       
