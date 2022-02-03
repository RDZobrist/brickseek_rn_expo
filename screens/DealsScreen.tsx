import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../types';





const DealsScreen = ({ navigation }: RootTabScreenProps<'Deals'>) => {
  const [loading, setLoading] = useState(false);
  const [products, fetchProducts] = useState();
  useEffect(() => {
    const getDealsFromApi = async () => {
      let response = await 
  
      fetch('http://52.89.75.192/deals?records=60', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
     
      });
     const dataJSON = await response.json()
     let products = dataJSON.products;
      return fetchProducts(products);
      
    }
    getDealsFromApi();
    
  });

  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Deals</Text>
      <View style={styles.separator} />
      <View>
        {products ? products.map(product => {return(<Text key={product.id}>{product.low_price}</Text>)}):null}
      </View>
    </View>
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
});
export default DealsScreen;