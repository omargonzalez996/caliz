import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ControlCitas from "./screens/ControlCitas"
import Historial from "./screens/Historial"
import HomeScreen from "./screens/HomeScreen"
import Configuracion from "./screens/Configuracion"
import DetallesCita from "./components/DetallesCita";
import CreateCita from "./components/CRUD/CreateCita";
import EditCita from "./components/CRUD/EditCita";
import { MaterialIcons } from '@expo/vector-icons';

const StackHomeScreen = createNativeStackNavigator();
const StackCrudCitas = createNativeStackNavigator();

function StackHome() {
    return (
        <StackHomeScreen.Navigator>
            <StackHomeScreen.Screen name="tab" component={TabGroup} options={{ headerShown: false }} />
            <StackHomeScreen.Screen name="detallesCita" component={DetallesCita} options={{ presentation: "modal", headerTitle: "Detalles" }} />
        </StackHomeScreen.Navigator>
    )
}

function StackCrud() {
    return (
        <StackCrudCitas.Navigator>
            <StackCrudCitas.Screen name="controlCitas" component={ControlCitas} />
            <StackCrudCitas.Screen name="createCita" component={CreateCita} />
            <StackCrudCitas.Screen name="editCita" component={EditCita} />
        </StackCrudCitas.Navigator>
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
            <Tab.Screen name="Control" component={StackCrud} />
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