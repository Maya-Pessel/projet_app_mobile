import {Text, VStack, Center, Link, Stack, Input, HStack, Heading} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import accountAction from "../../reducers/account";
import Loading from "../Loading";
import Button from "../../components/Button";

const Login = ({navigation}) => {
    const {loading: isLoading} = useSelector(state => state.account.action);
    const dispatch = useDispatch()

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
            <Heading>Log in</Heading>

            <Stack space={6} >
                    <Input variant="underlined" placeholder="Email" fontSize={16} />
                    <Input variant="underlined" placeholder="Password" fontSize={16}/>
                </Stack>
            <HStack space={5}>

              <Button secondary onPress={() => navigation.navigate("/public/signup")}>Signup</Button>
              <Button onPress={onPressSubmit}>Submit</Button>

               {/* <Button
                    _text={{
                        fontSize:16
                    }}
                    flex={1}
                    onPress={onPressSubmit}>
                    Submit
                </Button>*/}
            </HStack>
        </VStack>
    );
}

export default Login;