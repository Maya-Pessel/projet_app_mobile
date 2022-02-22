import { useState } from "react";
import { VStack, Stack, Input, HStack, Heading } from "native-base";
import firebase from "firebase";
import Button from "../../components/Button";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("f_bourih@etu-webschoolfactory.fr");
  const [password, setPassword] = useState("admin01");

  function onPressSubmit() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User connected !');
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (

    <VStack h="full" justifyContent={"center"} space={10} w="full" p="5">
      <Heading>Log in</Heading>

      <Stack space={6} >
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
        />
      </Stack>

      <HStack space={5}>
        <Button secondary onPress={() => navigation.navigate("/public/signup")}>Signup</Button>
        <Button onPress={onPressSubmit}>Submit</Button>
      </HStack>

    </VStack>
  );
}

export default Login;