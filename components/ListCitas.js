import React from "react";
import { StyleSheet, View, FlatList, Text } from 'react-native';

const ListCitas = () => {

    //YYYY-MM-DDTHH:mm:ss
    const dummyCitas = [
        { id: '1', date: '2023-08-17', hora: '13:00', paciente: "Raul Lopez", procedimiento: "Chequeo" },
        { id: '2', date: '2023-08-17', hora: '15:00', paciente: "Isaac Serrato", procedimiento: "Limpieza" },
        { id: '3', date: '2023-08-18', hora: '10:00', paciente: "Julio Sanchez", procedimiento: "Endodoncia 4to Molar" },
        { id: '4', date: '2023-08-18', hora: '12:00', paciente: "Miguel Garcia", procedimiento: "Instalacion Brackets" },
        { id: '5', date: '2023-08-18', hora: '13:00', paciente: "Omar Gonzalez", procedimiento: "Acomodada de muelas" },
        { id: '6', date: '2023-08-18', hora: '15:00', paciente: "Christian Ruiz", procedimiento: "blanqueamiento" }
    ]

    const renderCitas = ({ cita }) => {
        <View style={styles.citaContainer}>
            <Text>{cita.procedimiento}</Text>
            <Text>{cita.paciente}</Text>
            <Text>{cita.date}</Text>
        </View>
    }

    return (
        <FlatList data={dummyCitas}
            renderItem={renderCitas}
            keyExtractor={(cita) => cita.id} />
    )
}

const styles = StyleSheet.create({
    citaContainer: {
        padding: 10,
    },
    procedimiento: {
        fontSize: 10,
        fontWeight: "bold",
    }
});

export default ListCitas