import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from 'react-i18next';
import firebase from "firebase";
import { Center, Spinner, Text, View } from "native-base";
// import Loading from "./screens/Loading";
import AppPrivate from './screens/private';
import ROUTES from "./routes";

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  const { t } = useTranslation("Private");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(async authenticatedUser => {
      setIsLoading(true);
      try {
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);
  


  return (
    <View flex={1}>

      {isLoading && (
        <Center position="absolute" top={0} bottom={0} left={0} right={0} zIndex={2}>
          <Spinner size={48} color="primary" />
        </Center>
      )}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          {user !== null 
          ? (
              <>
                <Stack.Screen name="AppPrivate" component={AppPrivate} options={{ header: () => null }} />
                {ROUTES.map(route => {
                  if (route.layout === "/private" && !route.menuTab && route.screen) {
                    return <Stack.Screen
                      key={route.name}
                      name={route.name}
                      component={route.screen}
                      options={{
                        title: t(`${route.name}.head_title`),
                      }}
                    />
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
