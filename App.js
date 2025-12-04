import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, Button } from 'react-native';
import 'react-native-gesture-handler';
import { useState } from 'react';
import Soma from './components/Soma';
import Contador from './components/Contador';
import Effect from './components/Effect';
import List from './components/List';
import Btn from './components/Btn';
import BtnPressable from './components/BtnPressable';
import LoginScreen from './screens/LoginScreen';
import ExemploStyles from './components/ExemploStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Groups from './screens/Groups';
import Friends from './screens/Friends';
import LogoTitle from './components/LogoTitle';
import { app } from './firebase.config';
import Register from './screens/Register';
import AddGroup from './screens/AddGroup';

const Stack = createStackNavigator();

export default function App() {
  const { width, height, scale, fontScale } = useWindowDimensions();
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AddGroup' screenOptions={{ 
          headerTitle: props => <LogoTitle {...props} /> ,  
          headerRight: () =>
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"                              
                color="#fff"
              />,             
          headerStyle: {
            backgroundColor: 'blue',     
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Groups" component={Groups} initialParams={{id: 20}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddGroup" component={AddGroup} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
