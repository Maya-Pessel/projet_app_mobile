import { useRef, useState } from "react";
import { VStack, Stack, Input, HStack, Heading, Center, KeyboardAvoidingView, Link, Text, FormControl } from "native-base";
import Button from "../../components/Button";
import firebase from "firebase";
const db = firebase.firestore();

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("f_bourih@etu-webschoolfactory.fr");
  const [password, setPassword] = useState("admin01");
  const [confirmPassword, setConfirmPassword] = useState("admin01");
  const refs = {
    password: useRef(),
    confirmPassword: useRef(),
  };

  function onPressSubmit() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        db.collection("users").doc(user.uid).set({ email: user.email }).then(() => {
          console.log("Document successfully written!");
        }).catch((error) => {
          console.error("Error adding document: ", error);
        });
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
        <VStack flex={1}>
          <Heading mb={5}>Inscription</Heading>
          <Stack space={6}>
            <FormControl isRequired>
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
                onSubmitEditing={() => refs.password.current.focus() }
                returnKeyType={'next'}
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
                placeholder="Password"
                fontSize={16}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                returnKeyType={'next'}
                ref={refs.password}
                onSubmitEditing={() => refs.confirmPassword.current.focus()}
              />
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label _text={{
                bold: true
              }}
              >
                Confirmer le mot de passe
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="ConfirmPassword"
                fontSize={16}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                ref={refs.confirmPassword}
              />
            </FormControl>

          </Stack>
          <HStack space={5} mt={8} alignItems="center">
            <Link onPress={() => navigation.navigate("/public/login")}>
              <Text color="darkBlue.600">Déjà un compte ?</Text>
            </Link>
            <Button onPress={onPressSubmit}>S'inscrire</Button>
          </HStack>
        </VStack>
      </KeyboardAvoidingView>
    </Center>
  );
}

export default SignUp;