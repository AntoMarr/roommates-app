import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

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
}

function ConversationPage({ route, navigation }) {
    const { title, conversationID } = route.params
    const [data, setData] = useState()
    useEffect(() => 
    {getDataFromServer(setData, conversationID)}
    , []);

    return (
      <View>
          {data == null ? <Loading /> : <Loaded />}
      </View>
  )
}

export default ConversationPage