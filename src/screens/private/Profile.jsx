import firebase from "firebase";
import {Text, Box, Center, View, VStack, HStack, Avatar} from "native-base";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import CardUser from "../../components/CardUser";


const Profile = () => {
    function onPressLogout() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log('User signed out!');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

      <View flex={1} px={3} py={8} bg={'#565656'}>
        <CardUser screen="profile"/>
      </View>
    );
}

export default Profile;