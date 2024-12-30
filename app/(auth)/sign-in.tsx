import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useOAuth } from '@clerk/clerk-expo'
import { AntDesign } from '@expo/vector-icons'

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()
  const { startOAuthFlow: startGoogleFlow } = useOAuth({ strategy: "oauth_google" })
  const { startOAuthFlow: startGithubFlow } = useOAuth({ strategy: "oauth_github" })

  const onSelectAuth = React.useCallback(async (strategy: 'oauth_google' | 'oauth_github') => {
    const startOAuth = strategy === 'oauth_google' ? startGoogleFlow : startGithubFlow
    
    try {
      const result = await startOAuth()
      if (result && result.createdSessionId) {
        await setActive?.({ session: result.createdSessionId })
        router.replace('/')
      }
    } catch (err) {
      console.error("OAuth error:", err)
    }
  }, [startGoogleFlow, startGithubFlow, setActive, router])

  return (
    <View className="flex-1 justify-center p-8 bg-background">
      {/* Branding */}
      <View className="items-center mb-12">
        <Text className="text-4xl text-quaternary font-[Poppins-Bold] mb-2">Domsell</Text>
        <Text className="text-gray-400 text-center font-[Poppins-Regular]">Your Domain Trading Platform</Text>
      </View>

      {/* OAuth Buttons */}
      <View className="gap-4">
        <TouchableOpacity 
          className="flex-row items-center justify-center bg-white p-4 rounded-2xl"
          onPress={() => onSelectAuth('oauth_google')}
        >
          <AntDesign name="google" size={24} color="#4285F4" />
          <Text className="text-gray-800 font-[Poppins-SemiBold] ml-3">Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center justify-center bg-[#24292e] p-4 rounded-2xl"
          onPress={() => onSelectAuth('oauth_github')}
        >
          <AntDesign name="github" size={24} color="#fff" />
          <Text className="text-white font-[Poppins-SemiBold] ml-3">Continue with GitHub</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-400 font-[Poppins-Regular]">Don't have an account? </Text>
        <Link href="/sign-up">
          <Text className="text-quaternary font-[Poppins-SemiBold]">Sign up</Text>
        </Link>
      </View>

      <Text className="text-gray-500 text-center text-sm mt-8 font-[Poppins-Regular]">
        By continuing, you agree to our{' '}
        <Text className="text-quaternary">Terms of Service</Text> and{' '}
        <Text className="text-quaternary">Privacy Policy</Text>
      </Text>
    </View>
  )
}