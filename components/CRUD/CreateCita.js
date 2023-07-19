import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function CreateCita() {
    const [name, setName] = useState();
    const [proc, setProc] = useState();
    const [date, setDate] = useState();

    const ButtonPress = (e) => {
        e.preventDefault()
        Alert.alert('Alert Title', 'My Alert Msg', { text: 'OK', onPress: () => console.log('OK Pressed') },);
    }

    return (
        <View style={styles.container}>
            <View style={styles.formCont}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Agendar Cita</Text>
                </View>
                <View style={styles.inputCont}>
                    <Text>Nombre del paciente</Text>
                    <TextInput
                        style={styles.input}
                        underlineColor='#fff'
                        placeholder='Nombre del paciente'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.inputCont}>
                    <Text>Procedimiento</Text>
                    <TextInput
                        style={styles.input}
                        underlineColor='#fff'
                        placeholder='Procedimiento'
                        value={proc}
                        onChangeText={(text) => setProc(text)}
                    />
                </View>
                <View style={styles.inputCont}>
                    <Text>Fecha y hora</Text>
                    <TextInput
                        style={styles.input}
                        underlineColor='#fff'
                        placeholder='Fecha'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <Pressable
                    style={styles.button}
                    onPress={(e) => ButtonPress(e)}
                >
                    <Text style={styles.buttonText}>Agendar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formCont: {
        marginTop: 20,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: 350,
    },
    inputCont: {
        marginBottom: 10,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#f5f3f4",
        margin: 5,
        height: 40,
    },
    titleCont: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        display: "flex",
        margin: 20,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#0077B6",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "#fff"
    },
});

// { id: '1', date: '2023-08-17', hora: '13:00', paciente: "Raul Lopez", procedimiento: "Chequeo" },

//<MaterialIcons name='add-circle' size={60} color="green" />