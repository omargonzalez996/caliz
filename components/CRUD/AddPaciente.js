import { useState, useEffect } from "react";
import { TextInput, Button, Text, Switch, View } from "react-native";
import InputLabel from "../InputLabel";
import React from 'react'

function AddPaciente() {
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")
    const [genero, setGenero] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [alergias, setAlergias] = useState("")
    const [foto, setFoto] = useState("")

    return (
        <View>
            <div>
                <InputLabel  />
            </div>

        </View>
    )
}

export default AddPaciente