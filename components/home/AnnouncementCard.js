import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export class AnnouncementCard extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        var type, icon, color;
        if (this.props.type == 1)
        {
            type = "Announcement";
            icon = 'alert-triangle';
            color = '#DA0063';
        }
        else if (this.props.type == 2)
        {
            type = "Event";
            icon = "calendar";
            color = '#12CDD4';
        }
        else if (this.props.type == 3)
        {
            type = "Meeting";
            icon = "mic";
            color = '#9510AC';
        }
        else if (this.props.type == 4)
        {
            type = "Chore";
            icon = "list";
            color = '#2D9BF0';
        }

        return(
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Feather
                        name={icon}
                        size={36} 
                        color={color}
                        style={{
                            alignSelf: 'center',
                            paddingLeft: 10
                        }}
                    />
                </View>
                <View style={{flex: 5, paddingHorizontal: 20}}>
                    <Text style={{color: `${color}`}}>{type}</Text>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.desc1}</Text>
                    <Text style={styles.description}>{this.props.desc2}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6E6E6',
        margin: 1,
        height: 100,
        paddingVertical: 10
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
        // backgroundColor: 'green',
        // width: 50,
        // height: 50,
        // margin: 5,
        // borderRadius: 50 / 2,
        // backgroundColor: '#e0699f',
    },
    type: {
        fontSize: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 5
    },
    description: {
        fontSize: 12,
        color: 'grey',
    }
    
})

export default AnnouncementCard;
