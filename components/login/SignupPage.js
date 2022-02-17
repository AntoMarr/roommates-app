import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormInput from '../../assets/FormInput'
import MainButton from '../../assets/MainButton'

function SignupPage() {
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [repassword, setRepassword] = useState()
    const [email, setEmail] = useState();
    const [errorText, setErrorText] = useState()
    var available = false

    const navigation = useNavigation()
    async function checkUsernameAvailability()
    {
        try {
            const response = await fetch(
            'https://myroommies.herokuapp.com/user/' + username
            );
            let res = await response.json()
            available = res
            
        } catch (error) {
            console.error(error);
        }
    }

    async function addUser() {
        try {
            const response = await fetch(
            `https://myroommies.herokuapp.com/user/${username}/password/${password}/group/1/email/${email}/signup`)
        
        } catch (error) {
            console.log(error)
        }
    }

    async function sumbitInformation() {
        // check if passwords match
        if (password != repassword) {
            setErrorText("Passwords do not match.")
            return
        }
        // check if email could be valid using regex
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
        {
            setErrorText("E-Mail is not valid.")
            return
        }
        const res = await checkUsernameAvailability()
        console.log(available)
        if (!available)
        {
            setErrorText("Username is taken.")
            return
        }

        await addUser()
        navigation.navigate("Main")
    }
  return (
    <View>
        <Text style={styles.error}>{errorText}</Text>
        <FormInput
            title="Username"
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize={'none'}/>
        <FormInput 
            title="E-Mail"
            value={email}
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={setEmail}/>
        <FormInput 
            title="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}/>
        <FormInput 
            title="Confirm Password"
            value={repassword}
            onChangeText={setRepassword}
            secureTextEntry={true}/>
        <MainButton
        navigation={useNavigation}
        location="Main"
        action={sumbitInformation}>
            Submit
        </MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    }
})

export default SignupPage;