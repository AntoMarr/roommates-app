import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import DiscoverCard from './DiscoverCard';

function DiscoverPage() {
    // shuffle the array up for fun
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const getDataFromServer = async () =>
    {
      try {
        const response = await fetch(
          'https://myroommies.herokuapp.com/user/1/announcements.json'
        );
        const json = await response.json();
        console.log(json)
        this.setState({ data: json });
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    // useEffect(() => {
        
    // })

    // const [info, setInfo] = useState()
    return (
        <View>
            <ScrollView>
                <DiscoverCard label="$325/m" title="10 x 10 room for rent"/>
                <DiscoverCard label="$1100/m" title="3 bedroom 2 bath."/>
                <DiscoverCard label="$2200/m" title="4 bedroom 3 bath."/>
            </ScrollView>
        </View>
    )
}

export default DiscoverPage