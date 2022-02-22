import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import ROUTES from "../../routes";

const Tab = createBottomTabNavigator();

const AppPrivate = () => {
  const { t } = useTranslation("Private");
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{ headerShown: false }}>
        {ROUTES.map(route => {
          if (route.layout === "/private" && route.menuTab && route.screen) {
            return <Tab.Screen
              key={route.name}
              name={route.name}
              component={route.screen}
              options={{
                title: t(`${route.name}.head_title`)
              }}
            />;
          }
          return null;
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default AppPrivate;
