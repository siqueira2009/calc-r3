import {Text, View } from 'react-native';
import styles from './style'

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Calculadora de Regra de Três</Text>
    </View>
  );
}