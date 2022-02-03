import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../types';

const DealsScreen = ({ navigation }: RootTabScreenProps<'Deals'>) => {
  const [loading, setLoading] = useState(false);
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Deals</Text>
      <View style={styles.separator} />
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