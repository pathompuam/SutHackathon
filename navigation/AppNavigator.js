import React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import Test1Screen from '../screens/Test1Screen';
import EmergencyScreen from '../screens/EmergencyScreen';
import Test2Screen from '../screens/Test2Screen';
import Test3Screen from '../screens/Test3Screen';
import FirstScreen from '../screens/FirstScreen';
import NotificationFull from '../screens/NotificationFull';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack หลัก ของแอพ
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="NotificationFull" component={NotificationFull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Test1" component={Test1Screen} options={{ title: 'หน้าทดสอบ 1' }} />
      <Stack.Screen name="NotificationFull" component={NotificationFull} />
    </Stack.Navigator>
  );
}

function SecondStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={SecondScreen} options={{ title: 'พื้นที่เสี่ยง' }} />
      <Stack.Screen name="Test2" component={Test2Screen} options={{ title: 'หน้าทดสอบ 2' }} />
      <Stack.Screen name="NotificationFull" component={NotificationFull} />
    </Stack.Navigator>
  );
}

function ThirdStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={EmergencyScreen} options={{ title: 'แจ้งเหตุ' }} />
      <Stack.Screen name="Test3" component={Test3Screen} options={{ title: 'หน้าทดสอบ 3' }} />
      <Stack.Screen name="NotificationFull" component={NotificationFull} />
    </Stack.Navigator>
  );
}

// Tab Navigator แยกออกมา
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'MainStack') {
            iconName = 'home';
          } else if (route.name === 'Second') {
            iconName = 'map';
          } else if (route.name === 'Third') {
            iconName = 'alert';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',         // สีของ tab ที่ Active
        tabBarInactiveTintColor: '#ffe3e3',     // สีของ tab ที่ไม่ active
        tabBarStyle: {
          backgroundColor: '#801313',          // พื้นหลัง tab bar
          borderTopColor: '#801313',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="MainStack" component={MainStack} options={{ title: 'หน้าแรก' }} />
      <Tab.Screen name="Second" component={SecondStack} options={{ title: 'พื้นที่เสี่ยง' }}/>
      <Tab.Screen name="Third" component={ThirdStack} options={{ title: 'แจ้งเหตุ' }}/>
    </Tab.Navigator>
  );
}


