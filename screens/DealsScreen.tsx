import { StyleSheet, Dimensions, View, Text, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../types';
import ProductCard from '../components/ProductCard';

const DealsScreen = ({ navigation }: RootTabScreenProps<'Deals'>) => {
  const [loading, setLoading] = useState(false);
  const [products, fetchProducts] = useState([]);

  const renderProduct = (product: Object) => {
    product = product.item;
    return <ProductCard product={product} />;
  };
  const getDealsFromApi = async () => {
    setLoading(true);
    let response = await fetch('http://52.89.75.192/deals?records=100',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setLoading(false);

    const dataJSON = await response.json();
    return fetchProducts(dataJSON.products);
  };

  useEffect(() => {
    getDealsFromApi();
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(product, index) => index}
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
  }
});
export default DealsScreen;