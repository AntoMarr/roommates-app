import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

function renderItem(item, firstItemInDay) {
    return (
        <View style={styles.itemContainer}>
            <Text style={{textAlign: 'center'}}>{item.name}</Text>
        </View>
    )
}

export class EventsPage extends Component {
    render() {
        // used for grabbing the date and converting it to a propper format
        function formatDate(date) {
            var d = new Date(date - 1),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }
    return(
        <View style={styles.container}>
            {/* <Calendar
            markingType={'custom'}
            onDayPress={day => {
                console.log('selected day', day);
            }}
            minDate={formatDate(new Date())}
            enableSwipeMonths={true}
            hideExtraDays={true}
            disableMonthChange={true}
            allowSelectionOutOfRange={false}
            markedDates={{
                '2022-05-23': {selected: true, marked: true, disableTouchEvent: true},
                '2022-05-24': {selected: true, marked: true, customStyles: {
                    container: {
                      backgroundColor: Colors.light.mainColor
                    }
                },
                selectedColor: Colors.light.pressedColor},
                '2022-05-25': {marked: true, dotColor: 'red', disableTouchEvent: true},
                '2022-05-26': {marked: true},
                '2022-05-27': {disabled: true, activeOpacity: 0, disableTouchEvent: false}
            }}
            /> */}
            <Agenda
                items={{
                    '2022-04-22': [{name: 'item 1 - any js object'}],
                    '2022-04-23': [{name: 'item 2 - any js object', height: 80}],
                    '2022-04-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                }}
                renderItem={(item, firstItemInDay) => renderItem(item, firstItemInDay)}
                showClosingKnob={true}
                pastScrollRange={0}
                futureScrollRange={12}
                refreshing={false}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1
    },
    itemContainer: {
        flex: 1, 
        borderColor: 'black', 
        borderWidth: 1, 
        height: 50,
        justifyContent: 'center', 
        alignContent: 'center'}
})

export default EventsPage;
