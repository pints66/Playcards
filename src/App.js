import React, { Component } from "react";

import Card from "./components/Card" ;
import ActionsButtons from "./components/ActionsButtons" ;
import { deckArray } from "./utils/DeckArray";

class App extends Component {

  constructor() {
    super();
    this.state = {
      //cardsArray: deckArray.slice(0,6)
      cardsArray: deckArray.sort((a,b) => 0.5 - Math.random()).slice(0,6)
    };
  };

  shuffle = (array) => {
    for (let i= array.length -1 ; i>0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({cardsArray:array.slice(0,6)});
    return array;
  }


  render() {
    const cardsArray = this.state.cardsArray;
    return (
      <div style={{ width: "100%" }}>
        <header>deck of cards</header>
        <div className="card-block" >
          {cardsArray && cardsArray.map((card, index) => {
            return (
              <div className="animated slideInDown" key={index}>
                <Card suits={card.suits} card={card.card} color={card.color} />
              </div>
            ); 
          })}
        </div>
        <ActionsButtons shuffle={this.shuffle} deckArray={deckArray} />
        
      </div>
    );
  };
};


export default App;
