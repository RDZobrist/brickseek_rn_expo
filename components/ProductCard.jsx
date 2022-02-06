import React, { Component, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, Pressable, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default ProductCard = product => {
  const [liked, toggleLike] = useState(false);
  const { image, msrp, low_price, buy_link, id, name, type, store_icon_small } = product.product;
  console.log(store_icon_small)
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
      <Image
        source={{ uri: store_icon_small }}
        resizeMode="contain"
        style={styles.smallIcon}
      />
      </View>

      <Text style={styles.title}>{name}</Text>

      <Image source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>{low_price}</Text>
      <Text style={styles.text}>{msrp}</Text>
      <Text style={styles.text}>{buy_link}</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
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
    height: Dimensions.get('window').height / 2.25,
    width: Dimensions.get('window').width - 25
  },
  image: {
    height: Dimensions.get('window').height / 4.66,
    width: Dimensions.get('window').height / 4.66,
    borderRadius: 7.5,
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    width: Dimensions.get('window').width

  },
  title: {
    fontSize: 16,
    marginRight: 10,
    alignSelf: 'center'
  },
  smallIcon: {
    width: 50,
    height: 50,
    flex: .5
  },
  likedAndSmallLogoContainer:{
    flex: 1,
    flexDirection: 'row'

  },
  likedHeart:{
    flex: .5,
    marginHorizontal: 7,
    marginVertical: 7,
  
 
  }
});