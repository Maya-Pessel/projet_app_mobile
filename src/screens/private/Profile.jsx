import firebase from "firebase";
import {Text, Center, Button} from "native-base";

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
        <Center h="full">
            <Text>Profile</Text>
            <Button onPress={onPressLogout}>Logout</Button>
        </Center>
    );
}

export default Profile;