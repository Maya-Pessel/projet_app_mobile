'use strict';
import React, { Component } from 'react';
import { Text, View } from "native-base";
import firebase from "firebase";
import {StyleSheet} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import CardUser from "./CardUser";
import { useDispatch } from 'react-redux';
import { AccountTypes } from '../reducers/account';

// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log()
//   }

//   render() {
//     return (
//       // justifyContent: 'center',
//       // alignItems: 'center',
//       // width: 300,
//       // height: 300,
//       <View backgroundColor="#303030" alignItems="center" justifyContent="center" h="5/6" w="full">
//         <Text>{this.props.text}</Text>
//       </View>
//     )
//   }
// }

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


export default function ({ users, userId, userName }) {
  const dispatch = useDispatch();

  function handleYup(card) {
    firebase.firestore().collection("messages").add({
      users: [userId, card.id],
      lastMessage: "",
      messages: [],
    })
    .then(function (docRef) {
      firebase.firestore().collection("users").doc(userId).collection("follows").doc(docRef.id).set({ name: card.name });
      firebase.firestore().collection("users").doc(card.id).collection("follows").doc(docRef.id).set({ name: userName });
      dispatch({ type: AccountTypes.ADD_USER_FOLLOWS, follows: [card] });
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  }

  function handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }

  function handleMaybe(card) {
    console.log(`Maybe for ${card.text}`)
  }

  // If you want a stack of cards instead of one-per-one view, activate stack mode
  // stack={true}
  return (
    <SwipeCards
      cards={users}
      renderCard={(cardData) => <CardUser user={cardData} screen={"home"} />}
      renderNoMoreCards={() => <NoMoreCards />}
      handleYup={handleYup}
      handleNope={handleNope}
      onClickHandler={()=>null}
      //handleMaybe={handleMaybe}
      //hasMaybeAction
      nopeText={""}
      nopeStyle={{ borderColor: "transparent" }}
      yupStyle={{ borderColor: "transparent"}}
      yupText={""}
    />
  )

}

const styles = StyleSheet.create({
  noMoreCardsText: {
    fontSize: 22,
  }
})

