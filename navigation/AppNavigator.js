import React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen';
import SecondScreen from '../screens/SecondScreen';
import Test1Screen from '../screens/Test1Screen';
import ThirdScreen from '../screens/ThirdScreen';
import Test2Screen from '../screens/Test2Screen';
import Test3Screen from '../screens/Test3Screen';
import FirstScreen from '../screens/FirstScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack หลัก ของแอพ
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} options={{ title: 'หน้าแรก' }} />
      <Stack.Screen name="Test1" component={Test1Screen} options={{ title: 'หน้าทดสอบ 1' }} />
    </Stack.Navigator>
  );
}

function SecondStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={SecondScreen} options={{ title: 'หน้าสอง' }} />
      <Stack.Screen name="Test2" component={Test2Screen} options={{ title: 'หน้าทดสอบ 2' }} />
    </Stack.Navigator>
  );
}

function ThirdStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={ThirdScreen} options={{ title: 'หน้าสาม' }} />
      <Stack.Screen name="Test3" component={Test3Screen} options={{ title: 'หน้าทดสอบ 3' }} />
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
            iconName = 'list';
          } else if (route.name === 'Third') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="MainStack" component={MainStack} options={{ title: 'Main' }} />
      <Tab.Screen name="Second" component={SecondStack} />
      <Tab.Screen name="Third" component={ThirdStack} />
    </Tab.Navigator>
  );
}

