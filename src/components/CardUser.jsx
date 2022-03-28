import {Box, Center, HStack, Text, VStack} from "native-base";
import Badge from "./Badge";
import Button from "./Button";
import Icons from "../assets";


export default function CardUser(props) {
  function onEditProfile() {
    props.navigation.navigate("EditProfile");
  }

  return (
    <VStack
      bg="#22252D71"
      flex={1}
      borderRadius={5}
      shadow={2}
      px={5}
      borderColor={'rgba(255,255,255,0.11)'}
      borderWidth={0.3}
      _text={{
        color: "white",
        fontWeight: "bold"
      }}
    >

      <HStack mt={10}>
        <Center>
          <Box size={32} bg={"#22252D"} borderRadius={100}/>
        </Center>
        <VStack >
          <Text textAlign={'right'} fontSize={48} color={"white"}>Fares</Text>
          <Text textAlign={'right'} fontSize={26} color={"white"}>23 ans</Text>
          <HStack space={2} mt={3}>
            <Badge>Dota</Badge><Badge>Dota</Badge>
            <Badge>LoL</Badge>
          </HStack>
        </VStack>
      </HStack>
      <Text  py={10} fontSize={18} color={"white"} textAlign={"justify"}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée généralement.</Text>

      {props?.screen === "profile" && (
        <HStack position="absolute" bottom={-10} zIndex={9999}>
          <Box flex={1}/>
          <Button third onPress={onEditProfile}>Editer le profil</Button>
        </HStack>
      )}

      {props?.screen === "home" && (
        <HStack justifyContent={"space-between"} >
          <Center borderRadius={100} bg={"#F5C5C5"} p={3} pt={4}>
            <Icons.Action.Dislike/>
          </Center>

          <Center borderRadius={100} bg={"#CAE0C6"} p={3} pt={4}>
            <Icons.Action.Like/>
          </Center>
        </HStack>
      )}
    </VStack>
  );
};