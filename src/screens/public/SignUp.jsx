import { Text, Center, Button } from "native-base";

const SignUp = ({navigation}) => {
    return (
        <Center h="full">
            <Text>SignUp screen 😋</Text>
            <Button onPress={() => navigation.navigate("/public/login")}>Se connecter</Button>
        </Center>
    );
}

export default SignUp;