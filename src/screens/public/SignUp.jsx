import {Text, VStack, Center, Link, Stack, Input, HStack, Heading} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import accountAction from "../../reducers/account";
import Button from "../../components/Button";
import Loading from "../Loading";

const SignUp = ({navigation}) => {
    const {loading: isLoading} = useSelector(state => state.account.action);
    const dispatch = useDispatch();

    function onPressSubmit() {
        dispatch(accountAction.signinRequest("fares@gmail.com", "1234"));

        setTimeout(() => {
            dispatch(accountAction.signinRequestSuccess("myToken"));
        }, 500);
    }
    if (isLoading){
        return <Loading></Loading>
    }

    return (
        <VStack h="full" justifyContent={"center"} space={10} w="full" p="5">
            <Heading>Sign up</Heading>
            <Stack space={6} >
                <Input variant="underlined" placeholder="First name" fontSize={16} />
                <Input variant="underlined" placeholder="Last name" fontSize={16} />
                <Input variant="underlined" placeholder="Email" fontSize={16} />
                <Input variant="underlined" placeholder="Password" fontSize={16}/>
            </Stack>
            <HStack space={5}>
              <Button secondary onPress={() => navigation.navigate("/public/login")}>Login</Button>
              <Button onPress={onPressSubmit}>Signup</Button>
            </HStack>
        </VStack>
    );
}

export default SignUp;