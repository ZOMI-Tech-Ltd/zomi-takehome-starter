// dva-core / redux-saga rely on regenerator; load its runtime before the store.
import 'regenerator-runtime/runtime'
import 'react-native-gesture-handler'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { store } from './src/store'
import { theme } from './src/config/theme'
import RootTabs from './src/navigation/RootTabs'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar style="dark" />
            <NavigationContainer>
              <RootTabs />
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </StoreProvider>
    </GestureHandlerRootView>
  )
}
