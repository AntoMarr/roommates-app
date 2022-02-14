import React, { Component } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export class MainButton extends Component {
  render() {
    return (
        <Pressable style={styles.buttonContainer}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#167d69'
                        : '#0CA789',
                    width: '50%',
                    alignSelf: 'center',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10
                
                }]}
            onPress={this.props.action == null ? () => this.props.navigation.navigate(this.props.location) : this.props.action}>
            <Text style={styles.button}>{this.props.children}</Text>
        </Pressable>
    );
  }
}

const styles = StyleSheet.create(
    {   
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }}
)

export default MainButton;
