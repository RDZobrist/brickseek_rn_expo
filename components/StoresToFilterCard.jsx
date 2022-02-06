import React, { Component, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StoresToFilterCard = name => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
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
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width - 25
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
    width: Dimensions.get('window').width/3,
    height: 50,
  }
  
});

export default StoresToFilterCard;