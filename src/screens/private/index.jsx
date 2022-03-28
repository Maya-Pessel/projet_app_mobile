import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import ROUTES from "../../routes";
import {Center} from "native-base";

const Tab = createBottomTabNavigator();

const AppPrivate = () => {

  const { t } = useTranslation("Private");
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {backgroundColor:"#272B37", height:45, },
      tabBarLabel:() => {return null}
    }}>
      <Tab.Group screenOptions={{ headerShown: false }}>
        {ROUTES.map(route => {
          if (route.layout === "/private" && route.menuTab && route.screen) {
            return <Tab.Screen
              key={route.name}
              name={route.name}
              component={route.screen}
              options={{
                title: t(`${route.name}.head_title`),
                tabBarIcon: ({focused}) => {
                  const Icon = route.Icon;
                  const containerIconeSize = route.name === "home" ? "75px" : "60px"
                  return <Center rounded={100} bg={"#272B37"} size={containerIconeSize} top={"-10px"}>
                    <Icon focused={focused}/>
                  </Center>
                }
              }}
            />;
          }
          return null;
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
}
export default AppPrivate;
