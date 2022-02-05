import { StyleSheet, Dimensions, View, Text, Card, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../types';
import ProductCard from '../components/ProductCard';

const DealsScreen = ({ navigation }: RootTabScreenProps<'Deals'>) => {
  const [loading, setLoading] = useState(false);
  const [products, fetchProducts] = useState([]);

  const renderProduct = (product:Object<{item:string}>) => {
    return <ProductCard product={product.item} />;
   };
  const getDealsFromApi = async () => {
    let response = await fetch('http://52.89.75.192/deals?records=10', 
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
    const dataJSON = await response.json();
    setLoading(false);
    return fetchProducts(dataJSON.products);
  };

  useEffect(()=>{
    getDealsFromApi();
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deals</Text>
      <View style={styles.separator} />
      <ActivityIndicator size={'large'} loading={false} />
      <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={product=>product.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    color: 'lightblue'
  },

  card: {}
});
export default DealsScreen;