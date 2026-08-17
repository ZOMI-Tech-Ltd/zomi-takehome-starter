import React from 'react'
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Box, Text } from '../components/ui'

// The "Discover" header below is provided as an example of using the theme tokens.
// You build the feed (rows + dish cards). See ASSIGNMENT.md and the Figma.
export default function DiscoverScreen() {
  const insets = useSafeAreaInsets()
  return (
    <Box flex={1} backgroundColor="backgroundLight">
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingBottom: 100 }}>
        {/* Provided header — "Discover" with the accent underline (Title/T4) */}
        <Box paddingHorizontal="s5" paddingBottom="s4">
          <Text variant="titleT4">Discover</Text>
          <Box width={28} height={3} borderRadius="round" backgroundColor="textPrimary" marginTop="s1" />
        </Box>

        {/* TODO: build the horizontally-scrollable rows here */}
        <Box paddingHorizontal="s5" paddingTop="s6">
          <Text variant="caption">Build the feed rows here 🍜</Text>
        </Box>
      </ScrollView>
    </Box>
  )
}
