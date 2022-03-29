import {View} from "native-base";
import {LinearGradient} from "expo-linear-gradient";
import CardEditUser from "../../components/CardEditUser";


const EditProfile = ({ navigation }) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>
      <View flex={1} px={3} py={8}>
        <CardEditUser navigation={navigation} />
      </View>
    </LinearGradient>
  );
}

export default EditProfile;

