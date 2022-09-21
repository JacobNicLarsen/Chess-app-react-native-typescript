import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from "react"
import { Profile } from "./types/profileLookup"


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


function LookupScreen() {
  const [profile, setProfile] = useState<Profile>()

  const fetchUserData = (username:string) => {
    console.log("denne kjører")
    fetch("https://api.chess.com/pub/player/" + username)
    .then((response) => response.json())
    .then((json) => {
      setProfile(json)
      console.log(json)
    })
  }

  useEffect(() => {
    fetchUserData("TorpedoShark")
  },[])

  const ProfileComponent = () => {
    return (
      <>
        <Text>{profile?.player_id}</Text>
        <Text>{profile?.['@id']}</Text>
        <Text>{profile?.url}</Text>
        <Text>{profile?.followers}</Text>
        <Text>{profile?.country}</Text>
        <Text>{profile?.last_online}</Text>
        <Text>{profile?.joined}</Text>
        <Text>{profile?.status}</Text>
        <Text>{profile?.is_streamer}</Text>
        <Text>{profile?.verified}</Text>
      </>
    )
  }

  return (
    <View>
      <Text>Here comes the user profile</Text>
        <ProfileComponent /> 
    </View>
  )
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

