import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import FormInput from '../../assets/FormInput';
import MainButton from '../../assets/MainButton';

var height; // WORK ON HEIGHT FOR THE ADD PAGE BECAUSE THE NUMBER OF LINES IS MESSED UP WITH THE SYTLES

function AddAnnouncement() {
  const navigation = useNavigation()

  const [name, setName] = useState("")
  const [type, setType] = useState(1)
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Announcement', value: 1},
    {label: 'Event', value: 2},
    {label: 'Meeting', value: 3},
    {label: 'Chore', value: 4}
  ]);

  return (
    <View>
        <FormInput 
        title='Title'
        value={name}
        onChangeText={setName} />
        
        <Text style={styles.label}>Type</Text>
        <DropDownPicker
        style={styles.input}
        items={items}
        setItems={setItems}
        value={type}
        setValue={setType}
        setOpen={setOpen}
        open={open}
        dropDownContainerStyle={styles.dropdown}
        />

        <FormInput 
        title='Description'
        value={desc}
        onChangeText={setDesc}
        numberOfLines={5}
        />

        <MainButton
        action={() => {
          global.data.push(
            {
              "announcement_type": type,
              "announcementid": Math.random(99999),
              "description": desc,
              "title": name
            }
          );
          navigation.goBack()
        }}
        >Submit</MainButton>
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
  },
  dropdown: {
    width: '95%',
    borderColor: 'lightgrey',
    borderWidth: 3,
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 18
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