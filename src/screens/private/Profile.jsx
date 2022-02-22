import {Text, Center, Button} from "native-base";
import accountAction from "../../reducers/account";
import {useDispatch} from "react-redux";


const Profile = () => {
    const dispatch = useDispatch()
    function onPressLogout() {
        dispatch(accountAction.signoutRequest(()=>console.log("jdjd")));
    }
    return (
        <Center h="full">
            <Text>Profile</Text>
            <Button onPress={onPressLogout}>Logout</Button>
        </Center>
    );
}

export default Profile;