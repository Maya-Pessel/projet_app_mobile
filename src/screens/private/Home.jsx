import {Text, Center, View} from "native-base";
import ListCard from "../../components/ListCard";
import {LinearGradient} from "expo-linear-gradient";
import CardUser from "../../components/CardUser";

const Home = ({ navigation }) => {

    return (
      <LinearGradient
        // Button Linear Gradient
        colors={['#394051', '#333d5c' ]} style={{flex:1}}>
        <View flex={1} px={3} py={8}>

          <ListCard  />

        </View>
      </LinearGradient>
    );
}

export default Home;