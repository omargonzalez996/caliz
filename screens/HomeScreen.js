import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ListCitas from '../components/ListCitas';
import CardCita from '../components/CardCita';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeScreen</Text>
            <MaterialIcons name='home' size={24} color="black" />
            <CardCita />
        </SafeAreaView>
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