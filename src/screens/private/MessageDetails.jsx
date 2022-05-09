import {Text, Center, Box, TextArea, HStack, View, ScrollView, VStack, Pressable, Input} from "native-base";
import Icons from "../../assets";
import Button from "../../components/Button";
import Message from "../../components/Message";
import {LinearGradient} from "expo-linear-gradient";
import { useEffect, useState } from "react";
import firebase from "firebase";

const MOCK_MESSAGE = [
  { _id: "1", content: "Ut vitae sapien facilisis, varius sem nec, consequat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "2", content: "Ut vitae . Nulla quis fringilla nisi, ut feugiat nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "3", content: "varius sem nec, consequat massa.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "4", content: "torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "5", content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "6", content: "consequat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "7", content: "Nulla quis fringilla nisi, ut feugiat nisl. ", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "9", content: "Vivamus sit amet felis est.", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "10", content: "Ut vitae sapien facilisis, varius sem nec, consequat.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
];

const MessageDetails = ({route}) => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    firebase.firestore().collection("messages").doc(route.params.id)
      .get()
      .then(querySnapshot => {
        setMessages(querySnapshot.data().messages);
      });
  }, []);

  function sendMessage() {
    if(content == "") return;
    const msg = {
      author: route.params.userId,
      datetime: new Date(),
      content,
    };

    firebase.firestore().collection("messages").doc(route.params.id)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion(msg),
    })
    .then(function (docRef) {
      setMessages(currentMessages => [...currentMessages, msg])
      setContent("")
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  }
  
  function SendButton() {
    return (
      <Pressable onPress={sendMessage} bg="#22252D" rounded="full" p={1} mr="1">
        <Icons.Action.SendMessage />
      </Pressable>
    );
  }

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>
    <View flex={1}>
      <ScrollView flex={1} px={3} py={4}>
        <VStack space={2}>
          {messages.length == 0 && (
            <Center>
              <Text color="white">Pas de message</Text>
            </Center>
          )}
          {messages.map((msg, key) => <Message key={key} message={msg} />)}
        </VStack>
      </ScrollView>

      <Box alignItems="center" py={2}  bg="#22252D">
        <Input
          w={{
            base: "75%",
            md: "25%"
          }}
          value={content}
          onChangeText={text => setContent(text)}
          h={{base: "10"}}
          type={"text"}
          InputRightElement={<SendButton onPress={sendMessage} />}
          size={5}
          borderRadius="full"
          mr="2"
          bg="white"
          color="#22252D"
        />
      </Box>
    </View>
      </LinearGradient>
  );
}

export default MessageDetails;
