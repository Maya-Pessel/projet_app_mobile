import {Text, Center, View} from "native-base";
import ListCard from "../../components/ListCard";
import {LinearGradient} from "expo-linear-gradient";
import CardUser from "../../components/CardUser";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const account = useSelector(state => state.account);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("users")
      .where(firebase.firestore.FieldPath.documentId(), '!=', account.userId)
      // .where(firebase.firestore.FieldPath.documentId(), '!=', userId) groupeId
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setUsers(currentUsers => [{ id: doc.id, ...doc.data() }, ...currentUsers ]);
        });
      });
  }, []);

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#394051', '#333d5c' ]} style={{flex:1}}>
      <View flex={1} px={3} py={8}>

        <ListCard users={users} userId={account.userId} userName={account.user.name} />

      </View>
    </LinearGradient>
  );
}

export default Home;