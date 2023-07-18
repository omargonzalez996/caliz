import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ControlCitas from "./screens/ControlCitas"
import Historial from "./screens/Historial"
import HomeScreen from "./screens/HomeScreen"
import Configuracion from "./screens/Configuracion"
import DetallesCita from "./components/DetallesCita";
import CreateCita from "./components/CRUD/CreateCita";
import EditCita from "./components/CRUD/EditCita";
import { MaterialIcons } from '@expo/vector-icons';

const StackHomeScreen = createNativeStackNavigator();
// const StackCrudCitas = createNativeStackNavigator();
const TopCrudTabs = createMaterialTopTabNavigator();

function StackHome() {
    return (
        <StackHomeScreen.Navigator>
            <StackHomeScreen.Screen name="tab" component={TabGroup} options={{ headerShown: false }} />
            <StackHomeScreen.Screen name="detallesCita" component={DetallesCita} options={{ presentation: "modal", headerTitle: "Detalles" }} />
        </StackHomeScreen.Navigator>
    )
}

// function StackCrud() {
//     return (
//         <StackCrudCitas.Navigator>
//             <StackCrudCitas.Screen />
//             <StackCrudCitas.Screen />
//             <StackCrudCitas.Screen />
//         </StackCrudCitas.Navigator>
//     )
// }

function TabCrud() {
    return (
        <TopCrudTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == 'control') {
                        iconName = 'date-range';
                    } else if (route.name == 'agregar') {
                        iconName = 'add-circle';
                    } else if (route.name == 'editar') {
                        iconName = 'edit';
                    }
                    return <MaterialIcons name={iconName} size={20} color={color} />
                }
            })}
        >
            <TopCrudTabs.Screen name="control" component={ControlCitas} options={{ tabBarShowLabel: false }} />
            <TopCrudTabs.Screen name="agregar" component={CreateCita} options={{ tabBarShowLabel: false }} />
            <TopCrudTabs.Screen name="editar" component={EditCita} options={{ tabBarShowLabel: false }} />
        </TopCrudTabs.Navigator>
    )
}



const Tab = createBottomTabNavigator()
function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == 'Inicio') {
                        iconName = 'home';
                    } else if (route.name == 'Control') {
                        iconName = 'date-range';
                    } else if (route.name == 'Historial') {
                        iconName = 'history';
                    } else if (route.name == 'Configuracion') {
                        iconName = 'settings'
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Control" component={TabCrud} />
            <Tab.Screen name="Historial" component={Historial} />
            <Tab.Screen name="Configuracion" component={Configuracion} />
        </Tab.Navigator>
    )
}



export default function Navigation() {
    return <NavigationContainer>
        <StackHome />
        {/* <TabGroup /> */}
    </NavigationContainer>

}