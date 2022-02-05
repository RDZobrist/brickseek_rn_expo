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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:15,
      marginTop:15,
      borderRadius: 9,
      borderBottomColor:'lightgray'
    },
    image: {
      height: 200,
      width: 200

    }
  });