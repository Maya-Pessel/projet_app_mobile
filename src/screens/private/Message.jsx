import {Text, Center, VStack, HStack, Box, Heading, ScrollView, Divider, Pressable, View} from "native-base";
import {LinearGradient} from "expo-linear-gradient";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { AccountTypes } from "../../reducers/account";
import { RefreshControl, SafeAreaView, StyleSheet } from 'react-native';


const Message = ({ navigation }) => {
  const dispatch = useDispatch();
  const follows = useSelector(state => state.account.user.follows);
  const userId = useSelector(state => state.account.userId);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  function onShowDetails(follow) {
    navigation.navigate("messageDetails", { id: follow.id, title: follow.name, userId });
  }

  function NBBox(props) {
    return <Box bg={"#22252DF2"}  pt={6} pb={4}  {...props} />;
  }

  function loadMessages() {
    setRefreshing(true);
    firebase.firestore().collection(`users`).doc(userId).collection("follows").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        dispatch({ type: AccountTypes.SET_USER_FOLLOWS, follows: [{ id: doc.id, ...doc.data() }] });
      });
    }).catch(error => console.error(error)).finally(() => setRefreshing(false));
  }

  return (
  
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>

      <ScrollView
        stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadMessages}
          />
        }
      >
        <NBBox>
          <Heading  textAlign={"center"} color={"white"}>Messages</Heading>

        </NBBox>
        <VStack pt={7}>
          {follows.map(follow => (
            <Pressable onPress={() => onShowDetails(follow)}>
              <HStack>
                <Center px={5}>
                  <Box size={"60px"} bg={"grey"} borderRadius={100}/>
                </Center>
                <VStack>
                  <Text fontSize={22} color={"white"}>{follow.name}</Text>
                  <Text isTruncated maxW="300"  color={"white"} w="80%">soon</Text>
                </VStack>
              </HStack>
              <Divider my="2" color={"white"}/>
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
        </LinearGradient>
    );
}

export default Message;