import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FormInput from '../../assets/FormInput';
import MainButton from '../../assets/MainButton';

export class LoginPage extends Component {
constructor(props) {
    super(props);
    this.navigation = props.navigation
    
    this.state = {
        password: '',
        username: '',
        isLoading: false,
        errorText: ''
    };
}

    getDataFromServer = async (username, password) =>
        {
        try {
            const response = await fetch(
            'https://myroommies.herokuapp.com/user/' + username + "/" + password + '/login'
            //'https://myroommies.herokuapp.com/data/data.json'
            //https://myroommies.herokuapp.com/USER/annoucnements.json
            );
            const json = await response.json();
            if (json.length == 0)
            {
                console.log(json.length + " IS THE LENGTH")
                this.setState({ errorText: 'Username or password are incorrect. Try again.' });
            }
            else
                this.props.navigation.navigate("Main")
                global.userID = json[0].userid
                global.username = json[0].username
                global.email = json[0].email
        } catch (error) {
            this.setState({ errorText: 'Username or password are incorrect. Try again.' });
            console.error(error);
        }
    }

  render() {
    const { password, username, errorText } = this.state;
    const sumbitInformation = () => {
        // TODO: GRAB INFORMATION FROM DATABASE
        this.setState({isLoading: true})
        this.getDataFromServer(username, password);
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.error}>{errorText}</Text>
                <FormInput 
                title="Username"
                value={username}
                onChangeText={text => this.setState({username: text})}
                autoCorrect={false}
                autoCapitalize={'none'}/>
                <FormInput 
                title="Password"
                value={password}
                onChangeText={text2 => this.setState({password: text2})}
                secureTextEntry={true}/>
                {/* <Text style={styles.title}>Username</Text>
                <View style={styles.textInput}>
                    <TextInput
                    allowFontScaling={true}
                    style={styles.input}
                    autoCorrect={false}
                    value={username}
                    autoCapitalize={'none'}
                    onChangeText={text => this.setState({username: text})}
                    />
                </View>
                <Text style={styles.title}>Password</Text>
                <View style={styles.textInput}>
                    <TextInput
                    allowFontScaling={true}
                    style={styles.input}
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => this.setState({password: text})}
                    />
                </View> */}
                <MainButton 
                navigation={this.props.navigation}
                location="Main"
                action={sumbitInformation}>Submit</MainButton>
            </View>
            <View style={{flex: 1}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        height: 60,
        marginHorizontal: 10,
        marginBottom: 20
    },
    input: {
        fontSize: 32,
        padding: 10
    },
    title: {
        fontSize: 32,
        color: '#0CA789',
        fontWeight: 'bold',
        marginLeft: 10
    },
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    }
});

export default LoginPage;
