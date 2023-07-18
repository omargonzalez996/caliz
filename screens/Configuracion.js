import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Configuracion() {
    return (
        <View style={styles.container}>
            <Text>Configuracion</Text>
            <MaterialIcons name="settings" size={24} color="black" />
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