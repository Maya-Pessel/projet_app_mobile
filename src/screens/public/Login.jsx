import { Text, Center, Button, Link } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import accountAction from "../../reducers/account";

const Login = ({navigation}) => {
    const {loading: isLoading} = useSelector(state => state.account.action);
    const dispatch = useDispatch()

    function onPressLogin() {
        dispatch(accountAction.signinRequest("fares@gmail.com", "1234"));

        setTimeout(() => {
            dispatch(accountAction.signinRequestSuccess("myToken"));
        }, 2000);
    }

    return (
        <Center h="full" space={4}>
            <Text>Login screen 😁</Text>
            <Button
                onPress={onPressLogin}
                bg={isLoading ? "gray.600":"primary"}
                color="white"
                disabled={isLoading}
            >
                Se connecter
            </Button>
            <Link onPress={() => navigation.navigate("/public/signup")}>Créer un compte</Link>
        </Center>
    );
}

export default Login;