import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from "../../routes";

const Tab = createBottomTabNavigator();

const AppPrivate = () => (
    <Tab.Navigator>
        {ROUTES.map(route => {
            if (route.layout === "/private" && route.screen) {
                return <Tab.Screen
                    key={route.name}
                    name={route.name}
                    component={route.screen}
                    options={{
                        header: () => null,
                    }}
                />;
            }
            return null;
        })}
    </Tab.Navigator>
);

export default AppPrivate;
