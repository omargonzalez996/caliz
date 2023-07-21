import { StyleSheet, Text, View, Pressable, Button, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-community/picker';
import { getNombresPacientes, getNombresProcedimientos } from '../../Api/supabase';
import { MaterialIcons } from '@expo/vector-icons';
import Datepikker from '../Datepikker';
export default function CreateCita() {
    const [pacientes, setPacientes] = useState([]);
    const [idPaciente, setIdPaciente] = useState();
    const [procs, setProcs] = useState();
    const [idProc, setIdProc] = useState();
    //datepicker
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);





    const ButtonPress = () => {
        console.log('pérese, todavia no jala el registro');
    }

    const addButtonPress = () => {
        console.log('pérese, todavia no jala el add');
    }

    const fetchPacientes = async () => {
        try {
            setLoading(true);
            let fetchResult = await getNombresPacientes();
            if (fetchResult.length != 0) {
                setPacientes(fetchResult)
            } else {
                setPacientes([{ id: 0, nombre: 'no hay registros' }])
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProcs = async () => {
        try {
            setLoading(true);
            let fetchResult = await getNombresProcedimientos();
            if (fetchResult.length != 0) {
                setProcs(fetchResult)
            } else {
                setProcs([{ id: 0, nombre: 'no hay registros' }])
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPacientes();
        fetchProcs();
    }, [])



    return (
        <View style={styles.container}>
            <View style={styles.formCont}>
                <Text>Paciente</Text>
                <View style={styles.pickerCont}>
                    <Picker
                        style={styles.picker}
                        selectedValue={idPaciente}
                        onValueChange={(itemValue) =>
                            setIdPaciente(itemValue)
                        }>
                        <Picker.Item label={'Selecciona un paciente'} value={0} />
                        {pacientes?.map((pac) => (
                            <Picker.Item label={pac.nombre} value={pac.id} />
                        ))}
                    </Picker>
                    <Pressable
                        style={styles.addButton}
                        onPress={() => addButtonPress()}
                    >
                        <MaterialIcons name={'add'} size={24} color={'white'} />
                    </Pressable>
                </View>
                <Text>Paciente</Text>
                <View style={styles.pickerCont}>
                    <Picker
                        style={styles.picker}
                        selectedValue={idProc}
                        onValueChange={(itemValue) =>
                            setIdProc(itemValue)
                        }>
                        <Picker.Item label={'Selecciona un procedimiento'} value={0} />
                        {procs?.map((proc) => (
                            <Picker.Item label={proc.nombre} value={proc.id} />
                        ))}
                    </Picker>
                    <Pressable
                        style={styles.addButton}
                        onPress={() => addButtonPress()}
                    >
                        <MaterialIcons name={'add'} size={24} color={'white'} />
                    </Pressable>
                </View>
                <Text>Fecha y hora</Text>
                <Datepikker
                    date={date}
                    setDate={setDate}
                    setShow={setShow}
                    setMode={setMode}
                    mode={mode}
                    show={show}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => ButtonPress()}
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
    addButton: {
        height: 40,
        width: 40,
        backgroundColor: "#0077B6",
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
    pickerCont: {
        display: 'flex',
        alignItems: 'center'
    },
    picker: {
        borderRadius: 10,
        backgroundColor: "#f5f3f4",
        margin: 5,
        height: 40,
        width: '80%',
        paddingLeft: 10
    }
});

// { id: '1', date: '2023-08-17', hora: '13:00', paciente: "Raul Lopez", procedimiento: "Chequeo" },

//<MaterialIcons name='add-circle' size={60} color="green" />