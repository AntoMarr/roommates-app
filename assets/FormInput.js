import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function FormInput(props) {
  return (
    <View>
        <Text style={styles.label}>{props.title}</Text>
        <TextInput
        style={styles.input}
        {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '95%',
    height: 50,
    borderColor: 'lightgrey',
    borderWidth: 3,
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    backgroundColor: 'white'
  },
  label: {
    textAlign: 'left',
    width: '95%',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 5
  }
});

export default FormInput