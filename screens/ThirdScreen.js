import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/SecondScreenStyle';

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Third Screen</Text>

      <Button
              title="ไปหน้าทดสอบ 3"
              onPress={() => navigation.navigate('Test3')} />
      <Button title="Go back to Main" onPress={() => navigation.goBack()} />

    </View>
  );
}
