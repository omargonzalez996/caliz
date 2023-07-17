import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ControlCitas from "./screens/ControlCitas"
import Historial from "./screens/Historial"
import HomeScreen from "./screens/HomeScreen"
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = 'home';
                    } else if (route.name == 'Control') {
                        iconName = 'date-range';
                    } else if (route.name == 'Historial') {
                        iconName = 'history';
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Control" component={ControlCitas} />
            <Tab.Screen name="Historial" component={Historial} />
        </Tab.Navigator>
    )
}



export default function Navigation() {
    return <NavigationContainer>
        <TabGroup />
    </NavigationContainer>

}