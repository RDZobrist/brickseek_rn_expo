import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StoresToFilterCard from '../components/StoresToFilterCard';
import { formatCurrency } from '../utils';

const FilterStoresModalScreen = () => {
  const [storesToFilterMap] = useState({
    store: {
      "target": {
        filterValue: "1",
        displayName: "Target"
      },
      "lowes": {
        filterValue: "10",
        displayName: "Lowe's"
      },
      "home_depot": {
        filterValue: "11",
        displayName: "Home Depot"

      },
      "best_buy": {
        filterValue: "12",
        displayName: "Best Buy"
      },
      "macys": {
        filterValue: "13",
        displayName: "Macy's"

      },
      "sams_club": {
        filterValue: "19",
        displayName: "Sam's Club"

      },
      "dollar_general": {
        filterValue: "23",
        displayName: "Dollar General"

      },
      "bed_bath_and_beyond": {
        filterValue: "24",
        displayName: "Bed Bath and Beyond"

      },
      "kohls": {
        filterValue: "25",
        displayName: "Kohl's"

      },
      "ulta": {
        filterValue: "26",
        displayName: "ULTA"

      },
      "academy_sports": {
        filterValue: "28",
        displayName: "Academy Sports"

      },
      "walmart": {
        filterValue: "3",
        displayName: "Walmart"

      },
      "amazon_dot_com": {
        filterValue: "5",
        displayName: "Amazon.com"

      },
      "staples": {
        filterValue: "7",
        displayName: "Staples"

      },
      "office_depot": {
        filterValue: "8",
        displayName: "Office Depot"

      }
    }
  });


  const renderStoreToFilter = (store: Object) => {

    return <StoresToFilterCard product={store} />;
  };

  let filterableStores = storesToFilterMap.store;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filter Stores</Text>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.target.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.lowes.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.home_depot.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.best_buy.displayName}</Text>
      </View>  
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.macys.displayName}</Text>
      </View>  
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.sams_club.displayName}</Text>
      </View>  
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.dollar_general.displayName}</Text>
      </View>  
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.bed_bath_and_beyond.displayName}</Text>
      </View>  
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.kohls.displayName}</Text>
      </View>  
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.ulta.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.academy_sports.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.walmart.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.amazon_dot_com.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.staples.displayName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{filterableStores.office_depot.displayName}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  storesToFilterIconGallery: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
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
    width: Dimensions.get('window').width - 7.5
  }

});

export default FilterStoresModalScreen;
