import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from 'react-i18next';
import Loading from "./screens/Loading";
import AppPrivate from './screens/private';
import ROUTES from "./routes";


const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  const { t } = useTranslation("Private");
  const isIsSignedIn = useSelector(state => state.account.token);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsSignedIn(true);
  //   }, 5000);
  // }, []);

//   if(true) {
//     return <Loading />;
//   }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {isIsSignedIn !== null 
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
  );
};

export default RootNavigator;
