import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from "../../routes";

const Tab = createBottomTabNavigator();

const AppPrivate = () => (
    <Tab.Navigator>
        <Tab.Group screenOptions={{ headerShown: false }}>
            {ROUTES.map(route => {
                if (route.layout === "/private" && route.menuTab && route.screen) {
                    return <Tab.Screen
                        key={route.name}
                        name={route.name}
                        component={route.screen}
                    />;
                }
                return null;
            })}
        </Tab.Group>
    </Tab.Navigator>
);

export default AppPrivate;
