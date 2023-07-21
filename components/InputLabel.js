import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
function InputLabel({ title = '', value = '', setValue = '' }) {
    return (
        <>
            <View style={styles.titleCont}>
                <Text style={styles.title}>Agendar Cita</Text>
            </View>
            <View style={styles.inputCont}>
                <Text>{title}</Text>
                <TextInput
                    style={styles.input}
                    underlineColor='#fff'
                    placeholder={title}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
            </View>
        </>
    )
}
//<InputLabel title={} value={} setValue={} />
const styles = StyleSheet.create({
    inputCont: {
        marginBottom: 10,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#f5f3f4",
        margin: 5,
        height: 40,
        padding: 5,
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
})

export default InputLabel