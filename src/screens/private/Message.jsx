import {Text, Center, Button, VStack, HStack, Box, Heading, ScrollView, Divider, Pressable, View} from "native-base";
import Icons from "../../assets"
import {LinearGradient} from "expo-linear-gradient";
import CardUser from "../../components/CardUser";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";


const Message = ({ navigation }) => {
  const [follows, setFollows] = useState([]);
  const userId = useSelector(state => state.account.userId);

  useEffect(() => {
    firebase.firestore().collection(`users`).doc(userId).collection("follows").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        setFollows(currentFollows => [{ id: doc.id, ...doc.data() }, ...currentFollows]);
      });
    }).catch(error => console.error(error));
  }, []);

  function onShowDetails(follow) {
    navigation.navigate("messageDetails", { id: follow.id, title: follow.name });
  }
  
  function NBBox(props) {
    return <Box bg={"#22252DF2"}  pt={6} pb={4}  {...props} />;
  }


  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>
      <ScrollView stickyHeaderIndices={[0]}>
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