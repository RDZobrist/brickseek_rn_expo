import React, { Component, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Badge, Box, NativeBaseProvider } from 'native-base';
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
            <AntDesign style={styles.likedHeart} name="heart" size={30} color="red" />
            :
            <AntDesign style={styles.likedHeart} name="hearto" size={30} color="red" />
          }
        </Pressable>
        <NativeBaseProvider>
          <Box flex={.33}>
            {type === '1' ? 
            <Badge colorScheme="info" width={Dimensions.get('window').width/3} mr={'25%'}  ml={'25%'} mt={'3%'} rounded={'full'}>Online</Badge> 
            : 
            <Badge colorScheme="info" width={Dimensions.get('window').width/3} mr={'25%'}  ml={'25%'} mt={'3%'}  rounded={'full'}>In-Store</Badge> 
            }
        </Box></NativeBaseProvider>
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
      <Text style={styles.text}>{low_price}</Text>
      <Text style={styles.text}>{msrp}</Text>
      <Pressable onPress={() => { openURL(buy_link) }}>
        <Text style={styles.text}>Go to This Deal</Text>
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
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 7.5,
    marginRight: 7.5,
    height: Dimensions.get('window').height / 2.5,
    width: Dimensions.get('window').width - 25
  },
  image: {
    height: Dimensions.get('window').height / 7,
    width: Dimensions.get('window').height / 7,
    borderRadius: 5.5,
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
    flexDirection: 'row'

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

  }
});