import { useEffect, useState } from 'react';
import { getCitas } from '../Api/supabase';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardCita from '../components/CardCita';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchCitas = async () => {
        try {
            setLoading(true)
            let fetchResult = await getCitas();
            //console.log('Citas: ', fetchResult);
            setCitas(fetchResult);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCitas();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHead}>
                <Text style={{ margin: 5 }}>Proximas Citas</Text>
            </View>
            <ScrollView>
                <View style={styles.citaCont}>
                    {loading ? <MaterialIcons name="cloud-download" size={24} color="black" />
                        :
                        citas.map((cita) => (
                            <View key={cita.id}>
                                <CardCita
                                    cita_id={cita.id}
                                    fecha={cita.fecha}
                                    hora={cita.hora}
                                    paciente={cita.Paciente['nombre']}
                                    procedimiento={cita.Procedimiento['nombre']} />
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