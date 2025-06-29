import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Inputs from './src/components/Inputs';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Inputs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
