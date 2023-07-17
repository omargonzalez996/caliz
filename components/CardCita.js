import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CardCita = ({ date, paciente, procedimiento }) => {
    return (
        <View style={styles.citaCard}>
            <Text style={styles.titulo}>Endodoncia</Text>
            <Text style={styles.nombre}>Miguel Garcia</Text>
            <Text style={styles.fecha}>2023/08/18 3:30pm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    citaCard: {
        marginTop: 10,
        padding: 20,
        backgroundColor: "#22577a",
        borderRadius: 10,
        width: 350,
    },
    titulo: {
        fontSize: 30,
        color: "#f9f7f3"
    },
    nombre: {
        fontSize: 20,
        color: "#f9f7f3"
    },
    fecha: {
        textAlign: "right",
        fontSize: 15,
        color: "#f9f7f3",
    },
    hora: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#f9f7f3"
    }
});

export default CardCita