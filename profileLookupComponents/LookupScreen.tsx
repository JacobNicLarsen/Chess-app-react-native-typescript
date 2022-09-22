import * as React from 'react';
import { Layout, Text, Card, Input } from '@ui-kitten/components'
import { useState, useEffect } from "react"
import { Profile } from "./types/profileLookup"

function LookupScreen() {
    const [profile, setProfile] = useState<Profile>();
    const [inputValue, setInputValue] = useState('');
  
    const fetchUserData = (username:string) => {
      console.log("denne kjører")
      fetch("https://api.chess.com/pub/player/" + username)
      .then((response) => response.json())
      .then((json) => {
        setProfile(json)
        console.log(json)
      })
    }
  
  
    const ProfileComponent = () => {
      return (
        <Card >
          <Text>{profile?.player_id}</Text>
          <Text>{profile?.url}</Text>
          <Text>{profile?.followers}</Text>
          <Text>{profile?.country}</Text>
          <Text>{profile?.last_online}</Text>
          <Text>{profile?.joined}</Text>
          <Text>{profile?.status}</Text>
        </Card>
      )
    }

    const PlayerInput = () => {
      
    }
  
    return (
      <Layout>
        <Text category='h2'>Find player:</Text>
          <ProfileComponent /> 
      </Layout>
    )
  }

export default LookupScreen