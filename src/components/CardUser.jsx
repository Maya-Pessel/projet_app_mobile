import {Box, Center, HStack, Image, Text, VStack} from "native-base";
import Badge from "./Badge";
import Button from "./Button";
import Icons from "../assets";


export default function CardUser({ navigation, user, screen="" }) {

  function onEditProfile() {
    navigation.navigate("EditProfile");
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
        <Center mt={3}>
          <Image
            size={32}
            resizeMode="cover"
            rounded="full"
            alt={"Alternate Text"}
            source={{ uri: user.avatar }}
          />
        </Center>
        <VStack alignItems="flex-end">
          <Text textAlign={'right'} fontSize={48} color={"white"}>{user.name||"Pseudo"}</Text>
          <Text textAlign={'right'} fontSize={26} color={"white"}>{user.birthday||"Age"}</Text>
          <HStack space={2} mt={3}>
            {user.game && (
              <Badge>{user.game}</Badge>
            )}
          </HStack>
        </VStack>
      </HStack>
      <Text  py={10} fontSize={18} color={"white"} textAlign={"justify"}>
        {user.description || "Pas de bio"}
      </Text>

      {screen === "profile" && (
        <HStack position="absolute" bottom={-10} zIndex={9999}>
          <Box flex={1}/>
          <Button third onPress={onEditProfile}>Editer le profil</Button>
        </HStack>
      )}

      {screen === "home" && (
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