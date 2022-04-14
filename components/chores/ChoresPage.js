import React, { useReducer, useState } from 'react'
import { SectionList, StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import FormInput from '../../assets/FormInput';
import MainButton from '../../assets/MainButton';
import Colors from '../../constants/Colors';

function ChoresPage() {

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    function handleClick() {
        forceUpdate();
    }
    const [DATA, setDATA] = useState(
    [
        {
            title: "To-Do",
            data: [
                "This is the first item in our list!",
                "This is the second item in our list!",
                "This is the third item in our list!",
                "This is the fourth item in our list!",
                "This is the fifth item in our list!",
            ]
        },
        {
            title: "Done",
            data: [
                "This is the sixth item in our list!",
                "This is the seventh item in our list!",
                "This is the eigth item in our list!",
            ]
        }
    ]);

    function handler(index, checked) {
        let temp
        if (!checked)
        {
            temp = DATA[0].data[index]
            DATA[0].data = DATA[0].data.slice(0,index).concat(DATA[0].data.slice(index + 1, DATA[0].data.length))
            DATA[1].data.push(temp)
        } else {
            temp = DATA[1].data[index]
            DATA[1].data = DATA[1].data.slice(0,index).concat(DATA[1].data.slice(index + 1, DATA[1].data.length))
            DATA[0].data.push(temp)
        }
        setDATA(DATA)
        handleClick()
    }

    function checkBoxStyles({ size }) {
        return (
        {
            container: {
                width: size,
                height: size,
                borderWidth: 2,
                borderRadius: 6,
        }
    })
    }
    
    function CheckBox(props) {
        var size = props.size
        const [checked, setChecked] = useState(props.checked);
        return (
            <Pressable 
                style={checkBoxStyles({size}).container}
                onPress={() => 
                    {
                        setChecked(!checked)
                        handler(props.index, checked)
                    }}
            >
                {checked ? <MaterialIcons name="check" size={size - 5} color={Colors.light.mainColor} /> : null}
            </Pressable>
        )
    }

    const renderItem = ({ item, index, section }) =>
    {
        return (
            <>
                <View style={styles.itemContainer}>
                    <CheckBox 
                        size={40}
                        handler={handler}
                        index={index}
                        checked={section.title == "To-Do" ? false : true}
                    />
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            </>
        )
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [modalText, setModalText] = useState()

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Add An Item</Text>
                    <View style={styles.modalTextInputContainer}>
                        <FormInput
                        onChangeText={setModalText}
                        value={modalText}/>
                    </View>
                    <View style={styles.modalButtons}>
                        <MainButton
                        action={() => {
                            if (!modalText.trim() == "")
                            {
                                DATA[0].data.push(modalText.trim())
                                handleClick()
                                setModalVisible(!modalVisible);
                                setModalText("")
                            }
                        }}>
                            Submit
                        </MainButton>
                        <MainButton
                        action={() => {
                            setModalVisible(!modalVisible);
                            setModalText("")
                        }}>
                            Cancel
                        </MainButton>
                    </View>
                </View>
                </View>
            </Modal>
            <MainButton
            action={() => 
            {
                setModalVisible(!modalVisible)
            }}>Add Task</MainButton>
            <View style={[styles.divider, {marginTop: 20}]}/>
            <SectionList
                sections={DATA}
                style={{height: '90%'}}
                keyExtractor={(item, index) => item + index}
                renderItem={(item, index, section) => renderItem(item, index, section)}
                renderSectionHeader={({ section: { title } }) => (
                    <>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.dividerTitle}></View>
                    </>
                )}
                renderSectionFooter={() => (<View style={styles.divider}></View>)}
                stickySectionHeadersEnabled={false}
    />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    itemText: {
        fontSize: 18,
        marginHorizontal: 10,
        width: '80%'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 24,
    },
    divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '75%',
        alignSelf: 'center',
        marginVertical: 15,
        marginTop: 50,
        opacity: 0.5,
    },
    dividerTitle: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: '25%',
        alignSelf: 'center',
        marginBottom: 25,
        opacity: 1
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: '80%',
        height: 270,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: Colors.light.mainColor,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold'
      },
      modalTextInputContainer: {
          width: '100%',
          marginBottom: 25,
          marginTop: -25
      },
      modalButtons: {
          flex: 1,
          flexDirection: 'row',
          marginTop: -20
      }
})

export default ChoresPage