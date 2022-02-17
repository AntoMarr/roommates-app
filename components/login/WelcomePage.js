import React, { Component } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import MainButton from '../../assets/MainButton';

export class WelcomePage extends Component {
    constructor(props)
    {
        super(props);
        this.navigation = props.navigation;
    }

  render() {
    buttonStyle = function({pressed}) {
        return {
            backgroundColor: pressed
                ? '#167d69'
                : '#0CA789',
            width: '50%',
            alignSelf: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 10
        }
      }

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Let's Get Started!</Text>
            <View style={styles.buttons}>
                <MainButton navigation={this.navigation} location="Login">Login</MainButton>
                <MainButton navigation={this.navigation} location="Signup">Signup</MainButton>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        textAlign: 'center',
        flex: 1,
        alignContent: 'center',
        fontSize: 32,
        paddingTop: 50
    },
    buttons: {
        flex: 2,
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
});

export default WelcomePage;
