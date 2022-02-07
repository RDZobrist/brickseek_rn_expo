import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Pressable, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto } from '@expo/vector-icons';
import StoresToFilterCard from '../components/StoresToFilterCard';
import { formatCurrency, extractFilterValuesFromState } from '../utils';


const FilterStoresModalScreen = props => {
  const [targetSelected, toggleTargetSelected] = useState(false);
  const [lowesSelected, toggleLowesSelected] = useState(false);
  const [homeDepotSelected, toggleHomeDepotSelected] = useState(false);
  const [bestBuySelected, togglebestBuySelected] = useState(false);
  const [macysSelected, togglemacysSelected] = useState(false);
  const [samsclubSelected, toggleSamsclubSelected] = useState(false);
  const [dollarGeneralSelected, toggledollarGeneralSelected] = useState(false);
  const [bedbathandbeyondSelected, togglebedbathandbeyondSelected] = useState(false);
  const [kohlsSelected, togglekohlsSelected] = useState(false);
  const [ultaSelected, toggleUltaSelected] = useState(false);
  const [wallmartSelected, toggleWallmartSelected] = useState(false);
  const [amazonSelected, toggleAmazonSelected] = useState(false);
  const [staplesSelected, toggleStaplesSelected] = useState(false);
  const [officeDepotSelected, toggleOfficeDepotSelected] = useState(false);
  const [academySportsSelected, toggleAcademysportsSelected] = useState(false);

  const fetchFilteredResults = () => {
   return extractFilterValuesFromState(targetSelected, lowesSelected, homeDepotSelected,bedbathandbeyondSelected,bestBuySelected,
      macysSelected,samsclubSelected,dollarGeneralSelected,kohlsSelected,ultaSelected,wallmartSelected,
      amazonSelected,staplesSelected,officeDepotSelected,academySportsSelected);
  };


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

  let filterableStores = storesToFilterMap.store;
  const navigation = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filter Stores</Text>
      <Button title='< Go Back' color={'red'} onPress={()=>{navigation.navigate('Deals')}}/>
      <Pressable style={styles.card} onPress={() => { toggleTargetSelected(!targetSelected) }}>
        {targetSelected ?
          <Fontisto name="checkbox-active" size={24} color="green" />
          :
          <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.target.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleLowesSelected(!lowesSelected) }}>
        {lowesSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}        
            <Text style={styles.title}>{filterableStores.lowes.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => toggleHomeDepotSelected(!homeDepotSelected)}>
      {homeDepotSelected ?
          <Fontisto name="checkbox-active" size={24} color="green" />
          :
          <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.home_depot.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { togglebestBuySelected(!bestBuySelected) }}>
      {bestBuySelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}       
        <Text style={styles.title}>{filterableStores.best_buy.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { togglemacysSelected(!macysSelected) }}>
      {macysSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}       
        <Text style={styles.title}>{filterableStores.macys.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleSamsclubSelected(!samsclubSelected) }}>
      {samsclubSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.sams_club.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggledollarGeneralSelected(!dollarGeneralSelected) }}>
      {dollarGeneralSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}    
        <Text style={styles.title}>{filterableStores.dollar_general.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { togglebedbathandbeyondSelected(!bedbathandbeyondSelected) }}>        
      {bedbathandbeyondSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.bed_bath_and_beyond.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { togglekohlsSelected(!kohlsSelected) }}>
      {kohlsSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.kohls.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleUltaSelected(!ultaSelected) }}>
      {ultaSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.ulta.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleAcademysportsSelected(!academySportsSelected) }}>
      {academySportsSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.academy_sports.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleWallmartSelected(!wallmartSelected) }}>
      {wallmartSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.walmart.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleAmazonSelected(!amazonSelected) }}>
      {amazonSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.amazon_dot_com.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleStaplesSelected(!staplesSelected) }}>
      {staplesSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}
        <Text style={styles.title}>{filterableStores.staples.displayName}</Text>
      </Pressable>
      <Pressable style={styles.card} onPress={() => { toggleOfficeDepotSelected(!officeDepotSelected) }}>
      {officeDepotSelected ?
            <Fontisto name="checkbox-active" size={24} color="green" />
            :
            <Fontisto name="checkbox-passive" flex={.5} size={24} color="black" />}        
            <Text style={styles.title}>{filterableStores.office_depot.displayName}</Text>
      </Pressable>
      {targetSelected||lowesSelected||homeDepotSelected||bestBuySelected||macysSelected||
      samsclubSelected||dollarGeneralSelected||bedbathandbeyondSelected||kohlsSelected||
      ultaSelected||academySportsSelected||wallmartSelected||amazonSelected||staplesSelected||
      officeDepotSelected ?      
      <Button title='Fetch Filtererd Results' onPress={()=>{fetchFilteredResults()}} />
      : null
    }
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
    backgroundColor: '#ffffff',
    borderRadius: 12.5,
    flex: 1,
    shadowColor: '#bdbdbd',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.33,
    elevation: 3.33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: 7.5,
    marginRight: 7.5,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width - 10.5
  },
  pressable: {
    width: 100,
    flex: .5
  }

});

export default FilterStoresModalScreen;
