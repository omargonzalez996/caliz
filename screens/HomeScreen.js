import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CardCita from '../components/CardCita';

export default function HomeScreen() {

    const dummyCitas = [
        { id: '1', date: '2023-08-17', hora: '13:00', paciente: "Raul Lopez", procedimiento: "Chequeo" },
        { id: '2', date: '2023-08-17', hora: '15:00', paciente: "Isaac Serrato", procedimiento: "Limpieza Dental" },
        { id: '3', date: '2023-08-18', hora: '10:00', paciente: "Julio Sanchez", procedimiento: "Extracción de muela" },
        { id: '4', date: '2023-08-18', hora: '12:00', paciente: "Miguel Garcia", procedimiento: "Blanqueamiento" },
        { id: '5', date: '2023-08-18', hora: '20:00', paciente: "Alex Fernandez", procedimiento: "Cambio de Empastes" },
        { id: '6', date: '2023-08-18', hora: '13:00', paciente: "Omar Gonzalez", procedimiento: "Acomodada de muelas" },
        { id: '7', date: '2023-08-18', hora: '15:00', paciente: "Christian Ruiz", procedimiento: "Blanqueamiento" }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHead}>
                <FontAwesome5 name="tooth" size={24} color="black" />
                <Text style={{ margin: 5 }}>Proximas Citas</Text>
                <FontAwesome5 name="tooth" size={24} color="black" />
            </View>
            <ScrollView>
                <View style={styles.citaCont}>
                    {dummyCitas.map((cita) => (
                        <View key={cita.id}>
                            <CardCita
                                date={cita.date}
                                hora={cita.hora}
                                paciente={cita.paciente}
                                procedimiento={cita.procedimiento} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeHead: {
        display: "flex",
        flexDirection: 'row',
        padding: 5,
    },
    citaCont: {
        padding: 10,
        margin: 10,
    },
});