import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LookupScreen from "./profileLookupComponents/LookupScreen"
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from "@eva-design/eva"



function HomeScreen() {

  const navigation = useNavigation()
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    </Layout>
  );
}

function BoardScreen() {
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text category='h1'>Details Screen</Text>
    </Layout>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Board" component={BoardScreen} />
          <Stack.Screen name="Lookup" component={LookupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}


export default App;

