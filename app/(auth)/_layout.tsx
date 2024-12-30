import * as React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser"

WebBrowser.maybeCompleteAuthSession();

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  useWarmUpBrowser();

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }

  return <Stack 
    screenOptions={{
      headerShown: false,
    }}
  />
}