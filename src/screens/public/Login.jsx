import { Text, Center, Button } from "native-base";

const Login = ({navigation}) => {
    return (
        <Center h="full">
            <Text>Login screen 😁</Text>
            <Button onPress={() => navigation.navigate("/public/signup")}>Créer un compte</Button>
        </Center>
    );
}

export default Login;