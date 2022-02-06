import React, { Component, useState } from 'react';
import { NativeBaseProvider, Box, Badge } from 'native-base';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import openURL from '../utils';

export default ProductCard = (product, props) => {
  const [liked, toggleLike] = useState(false);
  const {
    image,
    msrp,
    low_price,
    buy_link,
    id,
    name,
    type,
    store_icon_small } = product.product;
  const navigation = props.navigation;
  return (
    <View style={styles.container} key={id}>
      <View style={styles.likedAndSmallLogoContainer}>
        <Pressable onPress={() => { toggleLike(!liked) }}>
          {liked ?
            <AntDesign style={styles.likedHeart} name="heart" size={25} color="red" />
            :
            <AntDesign style={styles.likedHeart} name="hearto" size={25} color="red" />
          }
        </Pressable>
        <View style={styles.dealTypeIcon}>

          {type === '1' ?
            <Text>Online</Text>
            :
            <Text>In-Store</Text>
          }
        </View>


        <Image
          source={{ uri: store_icon_small }}
          resizeMode="contain"
          style={styles.smallIcon}
        />
      </View>
      <Image source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{name}</Text>

      <View style={styles.priceAndDealContainer}>
        <View style={styles.lowPriceBadge}>
          <Text style={styles.lowPriceText}>{type==="1"?'Online:':'Store:'} ${low_price}</Text>
        </View>
      
        <View style={styles.msrpBadge}>
          <Text style={styles.msrpText}>{msrp}</Text>
        </View>
      </View>
      <Pressable onPress={() => { openURL(buy_link) }}>
          <View style={styles.gotToDealPressable}>
            <Text style={styles.text}>View This Deal</Text>
          </View>
        </Pressable>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12.5,
    flex: 1,
    shadowColor: '#bdbdbd',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.33,
    elevation: 3.33,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: 7.5,
    marginRight: 7.5,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 25
  },
  image: {
    height: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').height / 8,
    borderRadius: 5.5
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    width: Dimensions.get('window').width

  },
  title: {
    fontSize: 13.33,
    marginRight: 10,
    alignSelf: 'center'
  },
  smallIcon: {
    width: 50,
    height: 50,
    flex: .33,
    marginTop: 5
  },
  likedAndSmallLogoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5

  },
  likedHeart: {
    flex: .33,
    marginHorizontal: 7,
    marginVertical: 7,
  },
  dealTypeIcon: {
    flex: .33,
    fontSize: 15,
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: '#61A4FF',
    marginLeft: Dimensions.get('window').width / 10,
    marginRight: Dimensions.get('window').width / 10,
    paddingHorizontal: 25,
    paddingVertical: 3.5,
    marginBottom: '10%'
  
  },

  priceAndDealContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  lowPriceBadge: {
    alignContent: 'center',
    color: '#61A4FF',
    maxWidth: Dimensions.get('window').width / 3,
    maxHeight: Dimensions.get('window').height / 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 7,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: 10,
    flex: .5
  },
  msrpBadge: {
    alignContent: 'center',
    color: '#fafafa',
    maxWidth: Dimensions.get('window').width / 3,
    maxHeight: Dimensions.get('window').height / 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 7,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: 10,
    flex: .5
  },
  lowPriceText: {
    fontSize: 22,
    color: '#1457B3',
    fontWeight: '500'
  },
  msrpText: {
    fontSize: 22,
    color: 'lightgray',
    fontWeight: '500'
  },
  gotToDealPressable: {
    backgroundColor: '#61A4FF',
    maxWidth: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 7,
    marginLeft: '6.25%',
    marginRight: '6.25%',
    marginTop: 10
     
  }
});