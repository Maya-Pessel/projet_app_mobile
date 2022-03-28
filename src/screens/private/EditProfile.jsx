import firebase from "firebase";
import {View} from "native-base";
import CardUser from "../../components/CardUser";
import {LinearGradient} from "expo-linear-gradient";
import CardEditUser from "../../components/CardEditUser";


const EditProfile = ({navigation}) => {

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>
      <View flex={1} px={3} py={8}>


        <CardEditUser screen="profile" navigation={navigation}/>

      </View>
    </LinearGradient>
  );
}

export default EditProfile;

