import {Text, View } from 'react-native';
import styles from './style'

export default function ResultR3(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{props.message}</Text>
      <Text style={styles.resultText}>{props.result}</Text>
    </View>
  );
}