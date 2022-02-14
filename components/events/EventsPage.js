import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

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
            <Calendar
            minDate={formatDate(new Date())}
            enableSwipeMonths={true}
            hideExtraDays={false}
            disableMonthChange={true}
            allowSelectionOutOfRange={false}
            markedDates={{
                '2022-05-23': {selected: true, marked: true, disableTouchEvent: true},
                '2022-05-24': {selected: true, marked: true, dotColor: 'red'},
                '2022-05-25': {marked: true, dotColor: 'red', disableTouchEvent: true},
                '2022-05-26': {marked: true},
                '2022-05-27': {disabled: true, activeOpacity: 0, disableTouchEvent: false}
              }}
            />
            <ScrollView>
                <Text>
                    Text
                </Text>
            </ScrollView>
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
    }
})

export default EventsPage;
