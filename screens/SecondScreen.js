import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/SecondScreenStyle';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Second Screen</Text>

      <Button
              title="ไปหน้าทดสอบ 2"
              onPress={() => navigation.navigate('Test2')} />
      <Button title="Go back to Main" onPress={() => navigation.goBack()} />

    </View>
  );
}
