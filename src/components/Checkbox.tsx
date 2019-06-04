import React, {Component} from 'react';
import {MainContext} from './MainContext';

export interface IFavoriteProps {
  currentElement: any,
  checked: boolean
}

export class FavoritesButton extends Component<IFavoriteProps> {
  render() {
    const {checked} = this.props;
    return (
      <MainContext.Consumer>
        {context => <div className="hey"><input className="star" type="checkbox"
                                                onChange={() => {this.favoritesButtonHandler(context);}}
                                                checked={checked} title="bookmark-page"/></div>}
      </MainContext.Consumer>
    );
  }

  favoritesButtonHandler: (context: any) => any = (context) => {
    const {currentElement, checked} = this.props;
    if (!checked) {
      const copyOfFavorites: any = [...context.state.favoritesData];
      copyOfFavorites.push(currentElement);
      return context.favoritesDataSetter(copyOfFavorites);
    } else {
      let copyOfFavorites: any = [...context.state.favoritesData];
      let indexToSlice = copyOfFavorites.findIndex((el: any) => el.title === currentElement.title);
      copyOfFavorites.splice(indexToSlice, 1);
      return context.favoritesDataSetter(copyOfFavorites);
    }
  };
}
