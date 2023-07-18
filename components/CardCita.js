import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Platform, Pressable, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const CardCita = ({ date, hora, paciente, procedimiento }) => {
    const { navigate } = useNavigation();

    return (
        <View style={[styles.citaCard, styles.shadowProp]}>
            <Pressable
                style={styles.Apachurrable}
                onPress={() => {
                    navigate("detallesCita", { date, hora, paciente, procedimiento })
                }}
            >
                <AntDesign style={styles.infobutton} name="infocirlce" size={24} color="white" />
            </Pressable>
            <Text style={styles.titulo}>{procedimiento}</Text>
            <Text style={styles.nombre}>{paciente}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.fecha}>{date}</Text>
                <Text style={styles.hora}>{hora}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    citaCard: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "#4361ee",
        borderRadius: 10,
        width: 350,
    },
    Apachurrable: {
        backgroundColor: "#9e0059",
        zIndex: 100,
    },
    titulo: {
        fontSize: 25,
        color: "#f9f7f3"

    },
    nombre: {
        fontSize: 15,
        color: "#f9f7f3",
        marginBottom: 10,
    },
    dateContainer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: "#3f37c9",
        padding: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    fecha: {
        textAlign: "right",
        fontSize: 15,
        color: "#f9f7f3",
        marginRight: 10,
    },
    hora: {
        textAlign: "right",
        fontSize: 20,
        color: "#f9f7f3"
    },
    infobutton: {
        position: "absolute",
        top: 15,
        right: 15,
        margin: 0,
        zIndex: 80,
    },
    shadowProp: {
        ...Platform.select({
            ios: {
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            }
        })
    }
});

export default CardCita