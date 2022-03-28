import {Box, Center, HStack, Input, Text, TextArea, VStack} from "native-base";
import Badge from "./Badge";
import Button from "./Button";
import Icons from "../assets";


export default function CardEditUser(props) {

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

        <Center mt={3}>
          <Box size={32} bg={"#22252D"} borderRadius={100}/>
        </Center>

          <Input variant="underlined" placeholder="Fares" />
          <Input variant="underlined" placeholder="21" />
          <HStack space={2} mt={3}>
            <Badge>Dota</Badge><Badge>Dota</Badge>
            <Badge>LoL</Badge>
            <Badge>LoL</Badge>
            <Badge>LoL</Badge>
          </HStack>
          <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
          <HStack space={1} mt={3}>
            <Button third>Annuler</Button>
            <Button third>Valider</Button>
          </HStack>
    </VStack>
  );
};