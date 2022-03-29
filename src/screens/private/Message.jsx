import {Text, Center, Button, VStack, HStack, Box, Heading, ScrollView, Divider, Pressable, View} from "native-base";
import Icons from "../../assets"
import {LinearGradient} from "expo-linear-gradient";
import CardUser from "../../components/CardUser";

const Message = ({ navigation }) => {

    function onShowDetails(idMessage) {
        navigation.navigate("messageDetails", { title: "Maya" });
    }
    function NBBox(props) {
      return <Box bg={"#22252DF2"}  pt={6} pb={4}  {...props} />;
      }
  return (
        <LinearGradient
          // Button Linear Gradient
          colors={['#394051', '#333d5c' ]} style={{flex:1}}>

      <ScrollView stickyHeaderIndices={[0]}>
        <NBBox>
          {
            /* using theme colors to set text color */
          }
          <Heading  textAlign={"center"} color={"white"} >Messages</Heading>

        </NBBox>
        <VStack pt={7}>
          <Pressable onPress={() => onShowDetails(1)}>
            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>

            <HStack>
              <Center px={5}>
                <Box size={"60px"} bg={"grey"} borderRadius={100}/>
              </Center>
              <VStack>
                <Text fontSize={22} color={"white"}>Hello</Text>
                <Text isTruncated maxW="300"  color={"white"} w="80%">Fares tu es si méchant, Fares tu es si méchant</Text>
              </VStack>
            </HStack>
            <Divider my="2" color={"white"}/>




          </Pressable>
        </VStack>
      </ScrollView>
        </LinearGradient>
    );
}

export default Message;