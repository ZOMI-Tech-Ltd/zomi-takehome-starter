import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import type { Theme } from '../config/theme'

// Floating rounded pill tab bar, icon-only. Add the Collect tab + the gradient per Figma.
const ICONS: Record<string, { on: any; off: any }> = {
  Discover: { on: 'home', off: 'home-outline' },
  Profile: { on: 'person', off: 'person-outline' },
}

export default function PillTabBar({ state, navigation }: BottomTabBarProps) {
  const theme = useTheme<Theme>()
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 }]}>
      <View style={styles.pill}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index
          const icons = ICONS[route.name] ?? { on: 'ellipse', off: 'ellipse-outline' }

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true })
            if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name)
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={route.name}
              onPress={onPress}
              activeOpacity={0.8}
              style={styles.tab}
            >
              <Ionicons
                name={isFocused ? icons.on : icons.off}
                size={24}
                color={isFocused ? theme.colors.textPrimary : theme.colors.textSecondary}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16, // gap to screen edges
    paddingTop: 8,
    backgroundColor: 'transparent',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 360,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#121217',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  tab: {
    flex: 1,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
