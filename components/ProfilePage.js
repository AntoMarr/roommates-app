import React, { Component } from 'react';
import { Image, ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';

export class ProfilePage extends Component {

    constructor(props)
    {
        super(props)

        this.state = {text="This is a card"}
    }
  render() {
    return( 
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.pfp}>
                    <Image 
                    source={{uri: 'https://myroommies.herokuapp.com/images/icky.png'}}
                    style={styles.img}/>
                    <Text style={styles.profileName}>PROFILE NAME</Text>
                </View>
                <View style={styles.options}>
                    <Pressable style={styles.card}>
                        <Text>
                            THIS IS A CARD.
                        </Text>
                    </Pressable>
                    <Text style={styles.card}>
                        THIS IS A CARD.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flex: 1
    },
    pfp: {
        flex: 1,
        alignSelf: 'center',
        paddingVertical: 40
    },
    img: {
        // width: 484 / 4,
        // height: 609 / 4,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center'
    },
    profileName: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    options: {
        flex: 1
    },
    card: {
        flex: 1,
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginBottom: -1
    }
});

export default ProfilePage;
