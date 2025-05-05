import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Login from './screens/login';



export default function App() {

const Stack =createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>   
      <Stack.Screen name="Login" component={Login}
      options={{
        title: "LOGIN",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#525FEW1"},
      }}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

  return (
    <NavigationContainer>
      <MyStack/>
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
