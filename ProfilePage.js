import React, { Component } from 'react'
import { Image, ScrollViewBase, View } from 'react-native'

export class ProfilePage extends Component {
    render() {
        return (
            <View>
                <ScrollViewBase>
                    <View>
                        <Image source={{uri: 'https://avatars.dicebear.com/api/:sprites/:seed.svg'}}/>
                    </View>
                    <View>

                    </View>
                </ScrollViewBase>
            </View>
        )
    }
}

export default ProfilePage
