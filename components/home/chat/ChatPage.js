import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, FlatList, Pressable } from 'react-native'

const getDataFromServer = async (setData) =>
{
  try {
    const response = await fetch(
      'https://myroommies.herokuapp.com/user/1/conversations'
    );
    const json = await response.json();
    console.log(json)
    setData(json);
  } catch (error) {
    console.error(error);
  }
};

function Loading() {
  return (
    <View style={styles.loading}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}

function Item ({ item }) {
  const navigation = useNavigation()
  return (
  <Pressable 
  onPress={() => navigation.navigate("Message", {name: item.firstname})}
  style={({ pressed }) => [
    {
        backgroundColor: pressed
            ? '#167d69'
            : '#0CA789'
    },
    styles.item]}>
    <View style={styles.itemPicture}>
      <Text style={styles.itemPictureText}>{item.firstname.substring(0,1)}{item.lastname.substring(0,1)}</Text>
    </View>
    <View style={styles.itemContent}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemName}>
        {item.firstname} {item.lastname}
        </Text>
        <Text style={styles.itemDate}>
          {item.date.substring(0,10)}
        </Text>
      </View>
      <View style={styles.itemMessage}>
        <Text style={styles.itemMessageText}>{item.message}</Text>
      </View>
    </View>
  </Pressable>
  );
}

function Loaded({ data }) {
  console.log(data)
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  return (
    <View style={styles.loaded}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.conversationid}
      />
    </View>
  )
}

function ChatPage() {
  const [data, setData] = useState()
  useEffect(() => {
    getDataFromServer(setData)
  }, [])
  
  return (
    <View style={styles.container}>
      {data == null ? <Loading /> : <Loaded data={data}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  loaded: {
    flex: 1
  },
  container: {
    flex: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    // backgroundColor: 'lightgrey',
    borderRadius: 5,
    margin: 1
  },
  itemPicture: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    height: 50,
    width: 50,
    margin: 5
  },
  itemPictureText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '500'
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    margin: 10
  },
  itemMessage: {
    flex: 2
  },
  itemMessageText: {
    flex: 1
  },
  itemHeader: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  itemName: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16
  },
  itemDate: {
    flex: 1,
    textAlign: 'right',
  }
})

export default ChatPage