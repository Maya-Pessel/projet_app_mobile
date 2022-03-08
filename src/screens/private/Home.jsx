import {Text, Center, View} from "native-base";
import ListCard from "../../components/ListCard";

const Home = ({ navigation }) => {

    return (
      <Center flex={1} px={3} py={8} backgroundColor={"#565656"} w={"full"}>
        <ListCard  />

      </Center>


    );
}

export default Home;