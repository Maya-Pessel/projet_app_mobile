import { useRef, useState } from "react";
import { VStack, Input, HStack, Heading, KeyboardAvoidingView, Center, FormControl, Link, Text, Stack } from "native-base";
import firebase from "firebase";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("f_bourih@etu-webschoolfactory.fr");
  const [password, setPassword] = useState("admin01");
  const refPassword = useRef();

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
    <Center flex={1}>
      <KeyboardAvoidingView h={{
        base: "400px",
        lg: "auto"
      }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <VStack flex={1} w="full">
          <Heading mb={5}>Connexion</Heading>
          <Stack space={6}>
            <FormControl isRequired mt={6}>
              <FormControl.Label _text={{
                bold: true
              }}
              >
                Email
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Email"
                fontSize={16}
                value={email}
                onChangeText={setEmail}
                type="email"
                returnKeyType={'next'}
                onSubmitEditing={() => refPassword.current.focus()}
              />
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label _text={{
                bold: true
              }}
              >
                Mot de passe
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="ConfirmPassword"
                fontSize={16}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                ref={refPassword}
              />
            </FormControl>
          </Stack>
          <HStack space={5} mt={8} mb="4" alignItems="center">
            <VStack space={3}>
              <Link onPress={() => navigation.navigate("/public/signup")}>
                <Text color="darkBlue.600">Pas de compte ?</Text>
              </Link>
              <Link onPress={() => navigation.navigate("/public/forgot")}>
                <Text color="darkBlue.600">Mot de passe oublié ?</Text>
              </Link>
            </VStack>
            <Button onPress={onPressSubmit}>Se connecter</Button>
          </HStack>
        </VStack>
      </KeyboardAvoidingView>
    </Center>
  );
}

export default Login;