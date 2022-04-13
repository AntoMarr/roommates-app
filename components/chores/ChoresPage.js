import React, { useReducer, useState } from 'react'
import { FlatList, SectionList, StyleSheet, Text, View, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import CheckBox from './CheckBox'

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

    return (
        <View>
            <SectionList
                sections={DATA}
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
    }
})

export default ChoresPage