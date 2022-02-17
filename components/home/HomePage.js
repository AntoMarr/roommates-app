import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import AnnouncementCard from './AnnouncementCard';

export class HomePage extends Component {
    constructor(props)
    {
      super(props);

      this.state = {
        data: [],
        isLoading: true,
        refreshing: false
      };
    }

    getDataFromServer = async () =>
    {
      try {
        const response = await fetch(
          'https://myroommies.herokuapp.com/user/1/announcements.json'
        );
        const json = await response.json();
        console.log(json)
        this.setState({ data: json });
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ isLoading: false });
      }
    };

    componentDidMount()
    {
      this.getDataFromServer();
    }

    render() {
        const { data, isLoading, refreshing } = this.state;
      
        const renderItem = ({ item }) => (
        // <Item title={item.title} message={item.message}/>
            <AnnouncementCard
            type={item.announcement_type} 
            title={item.title}
            desc1={item.description}/>
        );

    return(
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
      <FlatList 
      style={{width: '100%'}}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.announcementid}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={this.getDataFromServer}
        />
      }
      />
      )}
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
