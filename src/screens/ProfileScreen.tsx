import React, { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Box, Text } from '../components/ui'
import EditableText from '../components/EditableText'

const PROFILE_KEY = 'profile:v1'

// The profile frame below is provided. You add the collected list under the header.
// (Double-tap the name or @id to edit them — they're saved to the device.)
// See ASSIGNMENT.md and the Figma.
export default function ProfileScreen() {
  const insets = useSafeAreaInsets()
  const [name, setName] = useState('userName')
  const [handle, setHandle] = useState('@zomi123')
  const loaded = useRef(false)

  // Load saved name/handle on mount.
  useEffect(() => {
    AsyncStorage.getItem(PROFILE_KEY)
      .then((raw) => {
        if (raw) {
          try {
            const p = JSON.parse(raw)
            if (p.name) setName(p.name)
            if (p.handle) setHandle(p.handle)
          } catch {}
        }
        loaded.current = true
      })
      .catch(() => {
        loaded.current = true
      })
  }, [])

  // Persist whenever they change (after the initial load).
  useEffect(() => {
    if (!loaded.current) return
    AsyncStorage.setItem(PROFILE_KEY, JSON.stringify({ name, handle })).catch(() => {})
  }, [name, handle])
  return (
    <Box flex={1} backgroundColor="backgroundPrimary">
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingBottom: 100 }}>
        {/* Provided frame: header. Double-tap the name / @id to edit them. */}
        <Box flexDirection="row" alignItems="center" gap="s3" paddingHorizontal="s5" paddingVertical="s4">
          <Box width={56} height={56} borderRadius="round" backgroundColor="backgroundLight" />
          <Box gap="s1">
            <EditableText value={name} onChange={setName} variant="headlineH5" />
            <EditableText value={handle} onChange={setHandle} variant="caption" />
          </Box>
        </Box>

        {/* Provided section header — the list goes below it */}
        <Box paddingHorizontal="s5" paddingTop="s2">
          <Text variant="titleT4">Collected</Text>
        </Box>

        {/* TODO: build the collected carousel here */}
        <Box paddingHorizontal="s5" paddingTop="s5">
          <Text variant="caption">Build the collected carousel here 👤</Text>
        </Box>
      </ScrollView>
    </Box>
  )
}
