import React, { Component, useState } from 'react';
import { NativeBaseProvider, Box, Badge } from 'native-base';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {openURL, formatCurrency, calculateAndFormatPercentSavings} from '../utils';

export default ProductCard = product => {
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
        <View style={styles.dealTypeBadge}>
          <Text style={styles.dealTypeBadgeText}>
            {type==="1"?'Online':'Store'}
          </Text>
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

      <View style={styles.lowPriceAndMSRPcontainer}>
        <View style={styles.lowPriceBadge}>
          <Text style={styles.lowPriceText}>{formatCurrency(low_price)}</Text>
          <Text style={styles.lowPriceText}>{type==="1"?'Online':'Store'}</Text>
        </View>
      
        <View style={styles.msrpBadge}>
          <Text style={styles.msrpText}>{formatCurrency(msrp)}</Text>
          <Text style={styles.msrpText}> MSRP</Text>
        </View>
      </View>
      <Text style={styles.totalSavingsText}>{calculateAndFormatPercentSavings(msrp, low_price)} OFF!</Text>
      <View style={styles.goToDealPressable}>

      <Pressable onPress={() => { openURL(buy_link) }}>
            <Text style={styles.presssableText}>View This Deal</Text>
        </Pressable>
        </View>

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
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width - 25
  },
  image: {
    height: Dimensions.get('window').height / 7.5,
    width: Dimensions.get('window').height / 7.5,
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
  dealTypeBadge: {
    flex: .33,
    fontSize: 15,
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: '#61A4FF',
    marginLeft: Dimensions.get('window').width / 8,
    marginRight: Dimensions.get('window').width / 8,
    paddingHorizontal: 25,
    paddingVertical: 3.5,
    marginBottom: '10%'
  
  },
  dealTypeBadgeText: {
    color: '#FFFFFF',
    fontWeight: "800",
    fontSize: 12,
    alignSelf: 'center'
  },

  lowPriceAndMSRPcontainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  lowPriceBadge: {
    alignContent: 'center',
    color: '#61A4FF',
    maxWidth: Dimensions.get('window').width / 2,
    maxHeight: Dimensions.get('window').height / 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 7,
    marginTop: 10,
    marginLeft: '10%',
    marginRight:'10%',
    flex: .5
  },
  msrpBadge: {
    alignContent: 'center',
    color: '#fafafa',
    maxWidth: Dimensions.get('window').width / 2,
    maxHeight: Dimensions.get('window').height / 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 7,
    marginTop: 10,
    marginLeft: '10%',
    marginRight:'10%',
    flex: .5
  },
  lowPriceText: {
    fontSize: 18,
    color: '#1457B3',
    fontWeight: '500'
  },
  msrpText: {
    fontSize: 18,
    color: '#C5C5C5',
    fontWeight: '500'
  },
  goToDealPressable: {
    backgroundColor: '#61A4FF',
    maxWidth: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 7,
    marginLeft: '6.25%',
    marginRight: '6.25%',
    marginTop: 10,
    marginBottom: 5
     
  },
  presssableText: {
    color: '#FFFFFF',
    fontWeight: "500"
  },
  totalSavingsText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#61A4FF',
    marginTop: 10
  }
});