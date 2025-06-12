// screens/MainScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyle from './styles/MainScreenStyle';

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={MainScreenStyle.container}>
      <Text style={MainScreenStyle.text}>หน้านี้คือ MainScreen</Text>
      <Button
        title="ไปหน้าทดสอบ 1"
        onPress={() => navigation.navigate('Test1')}
      />
      <Button
        title="ไปหน้า FirstScreen"
        onPress={() => navigation.navigate('FirstScreen')}
      />
    </View>
  );
}
