import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH - 75);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH / 2);

const DATA = [];

function DiscoverCard(props) {
    for (let i = 0; i < 10; i++) {
        DATA.push(i)
    }

    function _renderItem({ item }) {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
          </View>
        );
    }

    const [index, setIndex] = useState(0)
  return (
      <View>
          <Carousel
          data={DATA}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}          
        />
        <Pressable 
        style={styles.textcontainer}
        onPress={() => console.log("PRESSED!")}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Pressable>
        <View style={styles.divider} />
      </View>
  )
}

const styles = StyleSheet.create({
    carouselContainer: {
      marginVertical: 10
    },
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'dodgerblue'
    },
    itemLabel: {
      color: 'white',
      fontSize: 24
    },
    counter: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    label: {
        color: 'grey',
        marginBottom: 1
    },
    textcontainer: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 20,
        opacity: 0.5
    }
  });

export default DiscoverCard