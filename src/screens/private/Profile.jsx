import firebase from "firebase";
import {Text, Box, Center, View, VStack, HStack, Avatar} from "native-base";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import CardUser from "../../components/CardUser";
import {LinearGradient} from "expo-linear-gradient";
import { useSelector } from "react-redux";


const Profile = ({navigation}) => {
  const user = useSelector(state => state.account.user);

  function onPressLogout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('User signed out!');
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>
    <View flex={1} px={3} py={8}>

      <CardUser screen="profile" navigation={navigation} user={user} />
      
      <Center h={16}>
          <Button onPress={onPressLogout} h="10">LOGOUT</Button>
      </Center>

    </View>
    </LinearGradient>
  );
}

export default Profile;