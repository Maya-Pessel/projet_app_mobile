import {Text, Center, Box, TextArea, HStack, View, ScrollView} from "native-base";
import Button from "../../components/Button";

const MessageDetails = () => {
    return (

      <View flex={1}>
        <ScrollView flex={1}>
          <Text>Hello</Text>
        </ScrollView>

        <HStack bg={"black"} p={3}>
          <TextArea bg={"white"} borderRadius={0} borderWidth={0} w="70%" maxW="300" h={10} />
          <Button borderRadius={0} bg={"white"}>Envoyer</Button>
        </HStack>
      </View>
    );
}

export default MessageDetails;