import {Text, Center, Box, TextArea, HStack, View, ScrollView, VStack, Pressable, Input} from "native-base";
import Icons from "../../assets";
import Button from "../../components/Button";
import Message from "../../components/Message";

const MOCK_MESSAGE = [
  { _id: "1", content: "Ut vitae sapien facilisis, varius sem nec, consequat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "2", content: "Ut vitae . Nulla quis fringilla nisi, ut feugiat nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "3", content: "varius sem nec, consequat massa.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "4", content: "torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "5", content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "6", content: "consequat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
  { _id: "7", content: "Nulla quis fringilla nisi, ut feugiat nisl. ", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "9", content: "Vivamus sit amet felis est.", sendAt: new Date(), author: { name: "Maya", _id: "123" } },
  { _id: "10", content: "Ut vitae sapien facilisis, varius sem nec, consequat.", sendAt: new Date(), author: { name: "Fares", _id: "987" } },
];

const MessageDetails = () => {

  function SendButton() {
    return (
      <Pressable onPress={() => console.log("send message")} bg="black" rounded="full" p={1} mr="1">
        <Icons.Action.SendMessage />
      </Pressable>
    );
  }

  return (
    <View flex={1}>
      <ScrollView flex={1} px={3} py={4}>
        <VStack space={2}>
          {MOCK_MESSAGE.map(msg => <Message message={msg} />)}
        </VStack>
      </ScrollView>

      <Box alignItems="center" py={2}  bg="black">
        <Input
          w={{
            base: "75%",
            md: "25%"
          }}
          h={{base: "10"}}
          type={"text"}
          InputRightElement={<SendButton />}
          size={5}
          borderRadius="full"
          mr="2"
          bg="white"
          color="muted.400"
        />
      </Box>
    </View>
  );
}

export default MessageDetails;
