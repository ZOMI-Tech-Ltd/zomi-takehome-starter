import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PillTabBar from './PillTabBar'
import DiscoverScreen from '../screens/DiscoverScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

// Bottom-tab nav (PROVIDED) — Discovery + Profile only, using a simplified floating pill
// tab bar (see PillTabBar). Intentionally WITHOUT the linear-gradient fade.
//
// FOR THE CANDIDATE: add the "Collect" tab (create the screen + register it below), and
// add the linear-gradient fade behind the pill per Figma.
export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <PillTabBar {...props} />}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
