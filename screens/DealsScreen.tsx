import { StyleSheet, Dimensions, View, Text, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { RootTabScreenProps } from '../types';
import ProductCard from '../components/ProductCard';

const DealsScreen = ({ navigation, route }: RootTabScreenProps<'Deals'>) => {
  let filterParameters;
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [products, fetchProducts] = useState([]);

  const routeParameters = route.params;
  // if(route.params){
  //   if(route.params.filterVaules){
  //       let filterValues = route.params.filterVaules;
  //       let itemsToFilter = filterValues.length;
  //       let arrayInedexes = itemsToFilter - 1;
  //       let filterParameters=[];
  //       switch (arrayInedexes) {
  //         case 0:
  //           filterParameters = filterValues[0];
  //            break;
  //         case 1:
  //           filterParameters = filterValues[0 && 1];
  //           break;
  //           case 2:
  //           filterParameters = filterValues[0 && 1 && 2]
  //           break;
  //           case 3:
  //           filterParameters = filterValues[0 && 1 && 2 && 3];
  //           break;
  //           case 4:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4];
  //           break;
  //           case 5:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5]
  //           break;
  //           case 6:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6];
  //           break;
  //           case 7:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7];
  //           break;
  //           case 8:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8]
  //           break;
  //           case 9:
  //             filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9] 
  //             break;
  //             case 10:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 &&10 ]
  //           break;
  //           case 11:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 &&10&&11 ]
  //           break;
  //           case 12:
  //             filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 ]
  //             break;
  //             case 13:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 && 14 ]
  //           break;
  //           case 14:
  //           filterParameters = filterValues[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 && 14 && 15]
  //           default:
  //             return filterParameters

  //       } 
  //       console.log(filterParameters);
        
         
     
  //   } 
  // }
  const renderProduct = (product: Object) => {
    product = product.item;
    return <ProductCard product={product} />;
  };
  const getDealsFromApi = async () => {
    setLoading(true);
    try{
    let response = await fetch('http://52.89.75.192/deals?records=75',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });

    const dataJSON = await response.json();
    dataJSON.products?setLoading(false):null
    return fetchProducts(dataJSON.products);
    }
    catch {
      setLoading(false);
      return alert('There was an error fetching your deals')
    }
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
      try {
        getDealsFromApi();
        setRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    },[]);
   

  useEffect(() => {
    getDealsFromApi();
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(product, index) => index}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
export default DealsScreen;