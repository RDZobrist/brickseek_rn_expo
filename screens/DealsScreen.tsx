import { StyleSheet, Dimensions, View, Text, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../types';



const Item = ({ image, msrp }) => (
  <View style={styles.card}>

    <Text>{msrp}</Text>
    <Text>{image}</Text>
  </View>
)



const DealsScreen = ({ navigation }: RootTabScreenProps<'Deals'>) => {
  const [loading, setLoading] = useState(false);
  const [products, fetchProducts] = useState();

  const renderProduct = ({ product }) => {
    <Item product={product} />
  }
  const getDealsFromApi = async () => {
    let response = await

      fetch('http://52.89.75.192/deals?records=60', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }

      });
    const dataJSON = await response.json();
    let products = dataJSON.products;
    setLoading(false);
    return fetchProducts(products);


  }

  useEffect(getDealsFromApi); 


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deals</Text>
      <View style={styles.separator} />
    <ActivityIndicator size={'large'}  loading={loading} />
    {products?products.map(product=>{return(<View key={product.id}><Text>{product.low_price}</Text></View>)}):null}
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