import { useState } from "react";
import { VStack, Input, HStack, Heading, KeyboardAvoidingView, Center, FormControl, Link, Text, Stack, WarningOutlineIcon, Box, View } from "native-base";
import firebase from "firebase";
import Button from "../../components/Button";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("f_bourih@etu-webschoolfactory.fr");
  const [error, setError] = useState(null);

  function onPressSubmit() {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
        setError(false);
      })
      .catch((err) => {
        setError(err)
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  if (error === false) {
    return (
      <VStack space={8} w="full" h="full" alignItems="center" justifyContent="center">
        <Heading>mail envoyé !</Heading>
        <Link onPress={() => navigation.navigate("/public/login")}>
          <Box px="3" py="2" bg="primary.400" rounded="sm" _text={{
            fontSize: 16,
            color: "white",
          }}>
            Connexion
          </Box>
        </Link>
      </VStack>
    );
  }

  return (
    <Center flex={1}>
      <KeyboardAvoidingView h={{
        base: "400px",
        lg: "auto"
      }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <VStack flex={1}>
          <Heading mb={5}>Réinitialisation</Heading>
          <Text color="muted.400">
            Réinitialisation du mot de passe
          </Text>
          <Stack space={6}>
            <FormControl isRequired mt={6} isInvalid={error ? true : false}>
              <FormControl.Label _text={{
                bold: true
              }}
              >
                Email
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Email"
                type="email"
                fontSize={16}
                value={email}
                onChangeText={setEmail}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Essayer un autre email.
              </FormControl.ErrorMessage>
            </FormControl>
          </Stack>

          <HStack space={5} mt={8} alignItems="center">
            <Button secondary onPress={() => navigation.navigate("/public/login")}>Annuler</Button>
            <Button onPress={onPressSubmit}>Envoyer</Button>
          </HStack>

        </VStack>
      </KeyboardAvoidingView>
    </Center>
  );
}

export default ForgotPassword;
