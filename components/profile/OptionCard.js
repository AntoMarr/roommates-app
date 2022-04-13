import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

function OptionCard(props) {
    return (
        <View style={styles.options}>
            <Pressable
                style={styles.card}
                onPress={() => 
                    {
                        console.log("Option Card pressed.")
                        props.handler("Update " + props.children, props.option)
                    }
                }>
                <Text style={styles.text}>
                    {props.children}
                </Text>
                <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={styles.icon}/>
            </Pressable>
            <View style={styles.divider}></View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    options: {
        flex: 1
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        height: 50,
        marginBottom: -1,
        alignSelf: 'center'
    },
    text: {
        flex: 11,
        alignSelf: 'center',
        padding: 10,
        fontWeight: '500',
        fontSize: 18
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: 24,
        marginVertical: 16
    },
    divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15,
        opacity: 0.5
    }
});

export default OptionCard