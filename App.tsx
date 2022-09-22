import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LookupScreen from "./profileLookupComponents/LookupScreen"


function HomeScreen() {

  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="New Game"
        onPress={() => navigation.navigate('Board')}
      />
      <></>
      <Button
        title="Lookup User"
        onPress={() => navigation.navigate('Lookup')}
      />
    </View>
  );
}

function BoardScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Board" component={BoardScreen} />
        <Stack.Screen name="Lookup" component={LookupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

