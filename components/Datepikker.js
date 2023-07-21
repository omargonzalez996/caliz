import React from 'react'
import { Button, Text, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function Datepikker({ date, setDate, setShow, setMode, mode, show }) {

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
            <Button onPress={showDatepicker} title="Fecha" />
            <Button onPress={showTimepicker} title="Hora" />
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    )
}

export default Datepikker