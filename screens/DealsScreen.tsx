import { StyleSheet, Dimensions, View, Text, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { RootTabScreenProps } from '../types';
import ProductCard from '../components/ProductCard';

const DealsScreen = ({ navigation, route }: RootTabScreenProps<'Deals'>) => {
  let filterParameters;
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState([]);

  const routeParameters = route.params;

  const renderProduct = product => {
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
      await setProducts(dataJSON.products);
      return  dataJSON.products?setLoading(false):null

    }
    catch {
      setLoading(false);
      return alert('There was an error fetching your deals')
    }
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
      try {
       await getDealsFromApi();
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
        keyExtractor={product => product.id}
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
