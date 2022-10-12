import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import RootPage from './pages/RootPage'
import tw from './utils/tailwind'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={tw.color('base')} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={RootPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
