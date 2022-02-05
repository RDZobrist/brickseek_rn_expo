import React, {Component} from 'react';
import {View, Text, Dimensions, SafeAreaView, StyleSheet, Image,} from 'react-native';


export default ProductCard = product => {
  const {image, msrp, low_price, buy_link, id, name, type} = product.product; 
  console.log(image)
  return(
 <View style={styles.container} key={id}>
     <Image source={{
          uri: image
        }}
        style={styles.image}
        />
      <Text style={styles.text}>{low_price}</Text>
     <Text style={styles.text}>{msrp}</Text>
     <Text style={styles.text}>{buy_link}</Text>
     </View>
)
};
const styles = StyleSheet.create({
    container: {
      height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#bdbdbd',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 7.5,
    marginRight: 7.5,
    height: Dimensions.get('window').height / 4.5,
    width: Dimensions.get('window').width - 25
    },
    image: {
      height: Dimensions.get('window').height / 6,
      width: 200

    }
  });