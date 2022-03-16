import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

function ConversationPage({ route, navigation }) {
    const { title } = route.params
    
    return (
      <View>
          <Text>Conversation page!</Text>
      </View>
  )
}

export default ConversationPage