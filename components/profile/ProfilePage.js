import React, { Component } from 'react';
import { Image, ScrollView, View, Text, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import FormInput from '../../assets/FormInput';
import MainButton from '../../assets/MainButton';
import Colors from '../../constants/Colors';
import OptionCard from './OptionCard';

export class ProfilePage extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            modalVisible: false,
            modalTitle: "Update",
            value: "",
            option: 0
        }
        this.handler = this.handler.bind(this)
    }

    handler(modalTitle, option) {
        this.setState({
          modalVisible: !this.state.modalVisible,
          modalTitle: modalTitle,
          value: "",
          option: option
        })
        console.log(modalTitle)
    }

  render() {
    return( 
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.pfp}>
                    <Image 
                    source={{uri: 'https://myroommies.herokuapp.com/images/icky.png'}}
                    style={styles.img}/>
                    <Text style={styles.profileName}>{global.username}</Text>
                    <Text style={styles.email}>{global.email}</Text>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setState(!this.state.modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{this.state.modalTitle}</Text>
                        <View style={styles.modalTextInputContainer}>
                            <FormInput
                            onChangeText={text => this.setState({value: text})}
                            value={this.state.value}/>
                        </View>
                        <MainButton
                        action={() => {
                            if (this.state.option == 0) {
                                global.username = this.state.value
                            }
                            else if (this.state.option == 1) {
                                global.email = this.state.value
                            }
                            else if (this.state.option == 2) {
                                // change password
                            }
                            this.setState({modalVisible: !this.state.modalVisible})
                        }}>
                            <Text style={styles.textStyle}>Submit</Text>
                        </MainButton>
                    </View>
                    </View>
                </Modal>
                <View styles={styles.labelContainer}>
                    <Text style={styles.label}>Update Information</Text>
                </View>
                <OptionCard handler={this.handler} option={0}>Username</OptionCard>
                <OptionCard handler={this.handler} option={1}>E-Mail</OptionCard>
                <OptionCard handler={this.handler} option={2}>Password</OptionCard>
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
    labelContainer: {
        // width: '90%',
        // alignSelf: 'center'
    },
    label: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 15
    },
    email: {
        textAlign: 'center',
        fontSize: 18
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
      }
});

export default ProfilePage;
