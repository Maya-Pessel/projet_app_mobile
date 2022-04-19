import { useEffect, useState } from "react";
import {Box, Center, HStack, Input, Text, TextArea, VStack, useToast, Pressable, Avatar, Image, Spinner, useDisclose, Actionsheet} from "native-base";
import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';
import { useDispatch, useSelector } from "react-redux";
import { AccountTypes, GAMES_ENUM } from '../reducers/account';
import Badge from "./Badge";
import Button from "./Button";
import Loading from "../screens/Loading";

const db = firebase.firestore();
const defaultStorage = firebase.storage();


export default function CardEditUser() {
  const toast = useToast();
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);
  const [userEdit, setUserEdit] = useState({
    name: account.user.name,
    birthday: account.user.birthday,
    game: account.user.game,
    description: account.user.description,
  });
  const [isUploading, setIsUploading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  const games = Object.values(GAMES_ENUM);

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status: statusLoad } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (statusLoad !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
      const { status: statusTake } = await ImagePicker.requestCameraPermissionsAsync();
      if (statusTake !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }, []);

  const _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });
   
    if(!pickerResult.cancelled) {
      await uploadImage(pickerResult.uri);
    }
  };

  const _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!pickerResult.cancelled) {
      await uploadImage(pickerResult.uri);
    }
  };

  const uploadImage = async (uri) => {
    // fermer actionsheet
    onClose();

    // afficher le chargement
    setIsUploading(true);

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    // Create a ref in Firebase (I'm using my user's ID)
    const ref = defaultStorage.ref().child(`avatars/${account.userId}`);

    // Upload blob to Firebase
    const snapshot = await ref.put(blob);

    const remoteURL = await snapshot.ref.getDownloadURL();

    db.collection("users").doc(account.userId).update({ avatar: remoteURL}).then(() => {
      dispatch({ type: AccountTypes.SET_USER_AVATAR, avatar: remoteURL });
      toast.show({
        title: "Avatar modifié",
        placement: "top",
        status: "success",
      });
    }).catch((error) => {
      toast.show({
        title: "Erreur",
        description: "Votre avatar n'a pas été mis à jour",
        placement: "top",
        status: "error",
      })
    }).finally(() => {
      setIsUploading(false);
    });
  };


  const onSubmit = () => {
    db.collection("users").doc(account.userId).update({
      ...userEdit,
    }).then(() => {
      dispatch({ type: AccountTypes.SET_USER, user: userEdit });
      toast.show({
        title: "Profil mis à jour",
        placement: "top",
        status: "success",
      });
    }).catch((error) => {
      toast.show({
        title: "Erreur",
        description: "Votre profil n'a pas été mis à jour",
        placement: "top",
        status: "error",
      })
    });
  }

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
      {isUploading && <Loading loadingMessage="Téléchargement de l'image" />}

      <Pressable mt={3} onPress={onOpen}>
        <Center w="full">
          {account.user.avatar !== "" ? (
            <Image
              size="32"
              resizeMode="cover"
              rounded="full"
              alt={"Alternate Text"}
              source={{ uri: account.user.avatar }}
            />
          ) : (
            <Center bg="red.300" size="32" rounded="full">
              <Text>Ajouter +</Text>
            </Center>
          )}
        </Center>

      </Pressable>

      <Input
        value={userEdit.name}
        onChangeText={text => setUserEdit({...userEdit, name: text})}
        variant="underlined"
        color="white"
        selectionColor='white'
        placeholder="Pseudo"
      />
      <Input
        value={userEdit.birthday}
        onChangeText={text => setUserEdit({...userEdit,birthday: text})}
        variant="underlined"
        color="white"
        selectionColor='white'
        placeholder="Date de naissance"
      />
      <HStack space={2} mt={3}>
        {games.map(game => (
          <Pressable key={game} onPress={() => setUserEdit({ ...userEdit, game: game })}>
            <Badge bg={game == userEdit.game ? "green.700":"white"}>{game}</Badge>
          </Pressable>
        ))}
      </HStack>
      <TextArea
        w="75%" maxW="300" h={20}
        value={userEdit.description}
        onChangeText={text => setUserEdit({...userEdit, description: text})}
        color="white"
        selectionColor='white'
        placeholder="Bio"
      />
      <HStack space={1} mt={3}>
        <Button third onPress={_pickImage}>Annuler</Button>
        <Button onPress={onSubmit}>Valider</Button>
      </HStack>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Choisir un avatar</Actionsheet.Header>
          <Actionsheet.Item onPress={_takePhoto}>Prendre une photo</Actionsheet.Item>
          <Actionsheet.Item onPress={_pickImage}>Importer une photo</Actionsheet.Item>
          <Actionsheet.Item onPress={onClose}>Annuler</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
};
