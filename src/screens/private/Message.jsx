import {Text, Center, Button, VStack, HStack, Box, Heading, ScrollView, Divider, Pressable} from "native-base";
import Icons from "../../assets"

const Message = ({ navigation }) => {

    function onShowDetails(idMessage) {
        navigation.navigate("messageDetails");
    }

    return (
      <ScrollView>
        <VStack pt={10}>
          <Heading py={5} textAlign={"center"}>Messages</Heading>
          <Pressable onPress={() => onShowDetails(1)}>
            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />

            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />

            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />

            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />

            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />

            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />

            <HStack>
              <Center px={5}>
                <Box size={20} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} >Hello</Text>
                <Text isTruncated maxW="300" w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" />
          </Pressable>
        </VStack>
      </ScrollView>
    );
}

export default Message;