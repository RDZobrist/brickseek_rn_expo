import React, {Component} from 'react';
import {View, Text, Dimensions, SafeAreaView, StyleSheet, Image} from 'react-native';


export default ProductCard = product => (
 <View style={styles.container} key={product.product.id}>
     <Text style={styles.text}>{product.product.low_price}</Text>
     <Text style={styles.text}>{product.product.msrp}</Text>
     <Text style={styles.text}>{product.product.buy_link}</Text>
     </View>
)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:10,
      marginTop:20,
      borderRadius: 9,
      borderBottomColor:'lightgray'
    }
  });