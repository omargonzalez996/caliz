import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetallesCita() {
  const {
    params: { date, hora, paciente, procedimiento },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Text>Detalles Cita</Text>
      <View>
        <Text>{date}</Text>
        <Text>{hora}</Text>
        <Text>{paciente}</Text>
        <Text>{procedimiento}</Text>
      </View>
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