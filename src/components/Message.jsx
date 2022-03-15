import moment from "moment";
import { Box, HStack, PresenceTransition, Pressable, Text, VStack } from "native-base";
import { useState } from "react";

export default function Message({message}) {
  const [isShowingDate, setIsShowingDate] = useState(false);
  const isSender = message.author._id === "987";

  function DateFromNow() {
    return (
      <PresenceTransition
        visible={isShowingDate}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 500
          }
        }}
        flex={1}
      >
      <Box justifyContent="center" flex={1} placement={isSender ? "left" : "right"}>
        <Text textAlign={isSender ? "left" : "right"} color="gray.600">{moment(message.sendAt).fromNow()}</Text>
      </Box>
      </PresenceTransition>
    );
  }

  return (
    <Pressable
      key={message._id}
      w="full"
      alignItems={isSender ? "flex-end" : "flex-start"}
      onPressIn={() => setIsShowingDate(true)}
      onPressOut={() => setIsShowingDate(false)}
    >
      <HStack>
        {isSender && <DateFromNow />}
        <VStack bg={isSender ? "green.300" : "gray.200"} maxW="70%" rounded={8} p="2">
          <Text fontFamily={"body"}>{message.content}</Text>
        </VStack>
        {!isSender && <DateFromNow />}
      </HStack>
    </Pressable>
  );
}
