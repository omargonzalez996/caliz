import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCita } from '../Api/supabase';
import { MaterialIcons } from '@expo/vector-icons';

export default function DetallesCita() {
  const { params: { cita_id } } = useRoute(0);
  const [loading, setLoading] = useState(false);
  const [detallesCita, setDetallesCita] = useState({})
  let procedimiento;
  let paciente;
  const fetchDetalles = async () => {
    try {
      setLoading(true)
      let fetchResponse = await getCita(cita_id);
      console.log(fetchResponse);
      setDetallesCita(fetchResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetalles();
    procedimiento = detallesCita.Procedimiento;
    paciente = detallesCita.Paciente;
  }, [])

  return (
    <View style={styles.container}>
      <Text>Detalles Cita</Text>
      {loading ?
        <MaterialIcons name="cloud-download" size={24} color="black" />
        :
        <View style={styles.detallesCita}>
          <View>
            <View style={styles.horaFecha}>
              <Text>{detallesCita.fecha}</Text>
              <Text>{detallesCita.hora}</Text>
            </View>
            <View style={styles.procedimiento}>
              <Text>{procedimiento.nombre}</Text>
              <Text>{procedimiento.descripcion}</Text>
            </View>
            <View style={styles.paciente}>
              <Text>{paciente.nombre}</Text>
              <Text>{paciente.edad}</Text>
              <Text>{paciente.genero}</Text>
              <Text>{paciente.domicilio}</Text>
              <Text>{paciente.alergias}</Text>
              <Text>{paciente.foto}</Text>
            </View>
          </View>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});