import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from 'react-i18next';
import firebase from "firebase";
import { Center, Spinner, View } from "native-base";
import AppPrivate from './screens/private';
import ROUTES from "./routes";
import { useDispatch, useSelector } from 'react-redux';
import { AccountTypes } from './reducers/account';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { t } = useTranslation("Private");
  const dispatch = useDispatch();
  const user = useSelector(state => state.account);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(async authenticatedUser => {
      setIsLoading(true);
      try {
        if (authenticatedUser) {
          dispatch({ type: AccountTypes.SET_USER_ID, userId: authenticatedUser.uid });
        } else {
          dispatch({ type: AccountTypes.RESET_USER })
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  // load user profile when userId is up (after signin)
  useEffect(() => {
    if (user.userId) {
      firebase.firestore().collection("users").doc(user.userId).get().then(doc => {
        dispatch({ type: AccountTypes.SET_USER, user: doc.data() });
        dispatch({ type: AccountTypes.SET_USER_AVATART, user: doc.data().avatar });
        console.log("change")
        console.log(doc.data().avatar);
      });
    }
  }, [user.userId]);
  

  return (
    <View flex={1}>

      {isLoading && (
        <Center position="absolute" top={0} bottom={0} left={0} right={0} zIndex={2}>
          <Spinner size={48} color="primary" />
        </Center>
      )}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          {user.userId !== null
          ? (
              <>
                <Stack.Screen name="AppPrivate" component={AppPrivate} options={{ header: () => null }} />
                {ROUTES.map(route => {
                  if (route.layout === "/private" && !route.menuTab && route.screen) {
                    return <Stack.Screen
                      key={route.name}
                      name={route.name}
                      component={route.screen}
                      options={({ route }) => {
                        const title = route.params?.title || t(route.name + ".head_title")
                        return { title, headerTitleAlign: 'center' };
                      }}                    />
                  }
                  return null;
                })}
              </>
          ) : (
            <Stack.Group  screenOptions={{ headerShown: false }}>
                {ROUTES.map(route => {
                  if (route.layout === "/public" && route.screen) {
                    return <Stack.Screen
                      key={route.name}
                      name={route.layout + "/" + route.name}
                      component={route.screen}
                    />
                  }
                  return null;
                })}
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default RootNavigator;
