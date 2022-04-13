import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

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
    const [checked, setChecked] = useState(false);
    return (
        <Pressable 
            style={checkBoxStyles({size}).container}
            onPress={() => 
                {
                    setChecked(!checked)
                }}
        >
            {checked ? <MaterialIcons name="check" size={size - 5} color={Colors.light.mainColor} /> : null}
        </Pressable>
    )
}

export default CheckBox