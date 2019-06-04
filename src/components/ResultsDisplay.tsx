import React, {Component} from 'react';
import {IMainContext, MainContext} from './MainContext';
import {request} from 'http';
import {FavoritesButton} from './Checkbox';

export interface IResultsDisplayProps {
  currentDisplay: Array<Object>,
  defaultChecked: boolean,
}

export class ResultsDisplay extends Component<IResultsDisplayProps> {
  render() {
    return (
      <MainContext.Consumer>
        {context => <div>{this.resultDisplay(context)}</div>}
      </MainContext.Consumer>
    );
  }

  checkboxAfterVerification: (context: IMainContext, currentElement: any, defaultChecked: boolean) => any = (context, currentElement, defaultChecked) => {
    if (!defaultChecked) {
      const isFavorite = context.state.favoritesData.findIndex((favel: any) => favel.titleURL === currentElement.titleURL);
      return isFavorite >= 0 ? <FavoritesButton currentElement={currentElement} checked={true}/> :
        <FavoritesButton currentElement={currentElement} checked={false}/>;
    } else {
      return <FavoritesButton currentElement={currentElement} checked={true}/>;
    }
  };

  resultDisplay: (context: IMainContext) => any = (context) => {
    const {currentDisplay, defaultChecked} = this.props;
    if (currentDisplay.length > 0) {
      const resultDsiplay: Array<Object> = currentDisplay.map((el: any) => {
        const URLParameter: string = el.title.split(' ').join('_');
        el.titleURL = `https://en.wikipedia.org/wiki/${URLParameter}`;
        return (
          <div className="yo" key={el.titleURL}>
            <h2><a target="_blank" href={el.titleURL}>{el.title}</a><span
              className="badge badge-primary">{el.wordcount}</span></h2>
            {this.checkboxAfterVerification(context, el, defaultChecked)}
            <p dangerouslySetInnerHTML={{__html: el.snippet}}></p>
          </div>
        );
      });
      return resultDsiplay;
    } else {
      return <div>hi</div>;
    }
  };
}


