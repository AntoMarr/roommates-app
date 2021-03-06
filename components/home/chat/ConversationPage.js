import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native'

const getDataFromServer = async (setData, conversationID) =>
{
  try {
    const response = await fetch(
      'https://myroommies.herokuapp.com/conversation/' + conversationID + '/messages'
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
  return (
    <View style={styles.message}>
        <View style={item.senderid == global.userID ? styles.rightSideMessage : styles.leftSideMessage}>
            <Text style={item.senderid == global.userID ? styles.rightSideText : styles.leftSideText}>
                {item.message}
            </Text>
        </View>
    </View>
  )
}

  // TODO: HERE
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
        keyExtractor={item => item.messageid}
      />
    </View>
  )
}

function ConversationPage({ route, navigation }) {
    const { title, conversationID } = route.params
    const [data, setData] = useState()
    useEffect(() => 
    {getDataFromServer(setData, conversationID)}
    , []);

    return (
      <View style={styles.container}>
          {data == null ? <Loading /> : <Loaded data={data} />}
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
  message: {
    width: 'auto',
    paddingVertical: 2,
  },
  leftSideText: {
      textAlign: 'left',
      backgroundColor: 'lightgrey'
  },
  rightSideText: {
      textAlign: 'right',
      backgroundColor: 'blue'
  }
})

export default ConversationPage