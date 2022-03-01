import { Text, Center, Button } from "native-base";
import Icons from "../../assets"

const Message = ({ navigation }) => {

    function onShowDetails(idMessage) {
        navigation.navigate("messageDetails");
    }

    return (
        <Center h="full">
          <Text>Message</Text>
          <Button onPress={() => onShowDetails(1)}>Go details</Button>
        </Center>
    );
}

export default Message;