import 'react-native-gesture-handler'
import React from 'react'
import { TodoContextProvider } from './src/context/TodoContext'
import AppLoading from 'expo-app-loading'

import { NativeBaseProvider, extendTheme } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      400: {
        normal: 'Poppins_400Regular',
      },
      700: {
        normal: 'Poppins_700Bold',
      },
      900: {
        normal: 'Poppins_900Black',
      },
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
})

import { LogBox } from 'react-native'
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
])

import List from './src/screen/List'
import Add from './src/screen/Add'
import Edit from './src/screen/Edit'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen
          name='List'
          component={List}
          options={{ title: 'Todo App' }}
        />
        <Stack.Screen
          name='Add'
          component={Add}
          options={{ title: 'Add Todo' }}
        />
        <Stack.Screen
          name='Edit'
          component={Edit}
          options={{ title: 'Edit Todo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NativeBaseProvider theme={theme}>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </NativeBaseProvider>
  )
}
