import {Text, Center, View, Button, Box} from "native-base";
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import CardUser from "./CardUser";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // justifyContent: 'center',
      // alignItems: 'center',
      // width: 300,
      // height: 300,
      <View backgroundColor="#303030" alignItems="center" justifyContent="center" h="5/6" w="full">
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Tomato', backgroundColor: '#303030'},
        {text: 'Aubergine', backgroundColor: '#303030'},
        {text: 'Courgette', backgroundColor: '#303030'},
        {text: 'Blueberry', backgroundColor: '#303030'},
        {text: 'Maya 👸🏼', backgroundColor: '#303030'},
        {text: 'orange', backgroundColor: '#303030'},
      ]
    };
  }

  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <CardUser {...cardData} screen={"home"}/>}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        //handleMaybe={this.handleMaybe}
        //hasMaybeAction
        nopeText={"No"}
        //maybeStyle={{display: "none"}}
        //yupStyle={{display: "none"}}
        //nopeStyle={{display: "none"}}
        yupText={"Yes"}
      />
    )
  }
}

const styles = StyleSheet.create({
  noMoreCardsText: {
    fontSize: 22,
  }
})

