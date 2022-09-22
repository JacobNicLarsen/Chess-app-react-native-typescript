import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LookupScreen from "./profileLookupComponents/LookupScreen"
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import * as eva from "@eva-design/eva"



function HomeScreen() {

  const navigation = useNavigation()
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Board')}>
           New Game
      </Button>
      <Button onPress={() => navigation.navigate('Lookup')}>
        Lookup profile  
      </Button>
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

