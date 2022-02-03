import { Dimensions, StyleSheet, Text, View  } from 'react-native';
import { RootTabScreenProps } from '../types';


const InfoScreen = ({ navigation }: RootTabScreenProps<'Info'>) => { 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info</Text>
      <View style={styles.separator} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
export default InfoScreen;