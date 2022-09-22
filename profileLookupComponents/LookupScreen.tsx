import * as React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from "react"
import { Profile } from "./types/profileLookup"

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
        <View >
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
        </View>
      )
    }
  
    return (
      <View>
        <Text>Here comes the user profile</Text>
          <ProfileComponent /> 
      </View>
    )
  }

export default LookupScreen