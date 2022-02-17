import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

function AddAnnouncement() {
  const [name, setName] = useState(null)
  const [type, setType] = useState()
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Announcement', value: 1},
    {label: 'Event', value: 2}
  ]);
  return (
    <View>
        <Text style={styles.label}>Type</Text>
        <DropDownPicker
        items={items}
        setItems={setItems}
        style={styles.input}
        value={type}
        setValue={setType}
        setOpen={setOpen}
        open={open}
        containerStyle={styles.label}
        />

        <Text>{type}</Text>
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

export default AddAnnouncement