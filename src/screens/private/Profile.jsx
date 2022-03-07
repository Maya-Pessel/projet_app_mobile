
import firebase from "firebase";
import {Text, Center, Button} from "native-base";

import {Text, Box, Center, View, VStack, HStack, Avatar, Button} from "native-base";
import Badge from "../../components/Badge";


const Profile = () => {
    function onPressLogout() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log('User signed out!');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

      <View flex={1} px={3} py={8} bg={'#565656'}>
        <VStack
          bg="#303030"
          flex={1}
          borderRadius={5}
          shadow={2}
          _text={{
            color: "white",
            fontWeight: "bold"
          }}
        >

        <HStack mt={10}>
          <Center px={5}>
            <Box size={32} bg={"blue.900"} borderRadius={100}/>
          </Center>
          <VStack>
            <Text textAlign={'right'} fontSize={48} color={"white"}>Fares</Text>
            <Text textAlign={'right'} fontSize={26} color={"white"}>23 ans</Text>
            <HStack space={2} mt={3}>
              <Badge>Dota</Badge><Badge>Dota</Badge>
              <Badge>LoL</Badge>
            </HStack>
          </VStack>
        </HStack>
            <Text px={5} py={10} fontSize={18} color={"white"} textAlign={"justify"}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée généralement.</Text>
          <Box alignItems={"flex-end"} pr={4}>
            <Button w={'1/2'} >Editer le profil</Button>
          </Box>
        </VStack>
      </View>
    );
}

export default Profile;