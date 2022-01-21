import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import AnnouncementCard from './AnnouncementCard';

export class HomePage extends Component {
    
    
    render() {

        var data = [{
            id: 1,
            type: '1',
            title: "Elevator Down for Repair!",
            desc1: "Please use the stairs while the elevator",
            desc2: "is under repair."
          },
          {
            id: 2,
            type: '2',
            title: "Volleyball Game in the Quad!",
            desc1: "This is the message!"
          },
          {
            id: 3,
            type: '3',
            title: "Announcement",
            desc1: "This is the message!"
          },
          {
            id: 4,
            type: '4',
            title: "Announcement",
            desc1: "This is the message!"
          },{
            id: 5,
            type: '1',
            title: "Elevator Down for Repair!",
            desc1: "Please use the stairs while the elevator",
            desc2: "is under repair."
          },
          {
            id: 6,
            type: '2',
            title: "Volleyball Game in the Quad!",
            desc1: "This is the message!"
          },
          {
            id: 7,
            type: '3',
            title: "Announcement",
            desc1: "This is the message!"
          },
          {
            id: 8,
            type: '4',
            title: "Announcement",
            desc1: "This is the message!"
          }]

          
        const renderItem = ({ item }) => (
        // <Item title={item.title} message={item.message}/>
            <AnnouncementCard
            type={item.type} 
            title={item.title}
            desc1={item.desc1}
            desc2={item.desc2}/>
        );
    return(
    <SafeAreaView style={styles.container}>
      <FlatList 
      style={{width: '100%'}}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}/>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 1,
    }}
);

export default HomePage;
