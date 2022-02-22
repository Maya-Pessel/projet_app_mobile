import { useState } from "react";
import { VStack, Stack, Input, HStack, Heading } from "native-base";
import Button from "../../components/Button";
import Loading from "../Loading";
import firebase from "firebase";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("f_bourih@etu-webschoolfactory.fr");
  const [password, setPassword] = useState("admin01");

  function onPressSubmit() {
    console.log("email", email);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User created !');
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <VStack h="full" justifyContent={"center"} space={10} w="full" p="5">
      <Heading>Sign up</Heading>
      <Stack space={6} >
        <Input variant="underlined" placeholder="First name" fontSize={16} />
        <Input variant="underlined" placeholder="Last name" fontSize={16} />
        <Input
          variant="underlined"
          placeholder="Email"
          fontSize={16}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          variant="underlined"
          placeholder="Password"
          fontSize={16}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </Stack>
      <HStack space={5}>
        <Button secondary onPress={() => navigation.navigate("/public/login")}>Login</Button>
        <Button onPress={onPressSubmit}>Signup</Button>
      </HStack>
    </VStack>
  );
}

export default SignUp;