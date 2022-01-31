import React, { Component } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export class OptionCard extends Component {
  render() {
    return (
        <View style={styles.options}>
            <Pressable style={styles.card}>
                <Text style={{flex: 11}}>
                    THIS IS A CARD.
                </Text>
                <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={styles.icon}/>
            </Pressable>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    options: {
        flex: 1
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginBottom: -1
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: 24,
        marginVertical: 16
    }
});

export default OptionCard;
