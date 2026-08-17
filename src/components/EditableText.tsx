import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'
import { Text } from './ui'
import type { Theme } from '../config/theme'

type Props = {
  value: string
  onChange: (v: string) => void
  variant: Exclude<keyof Theme['textVariants'], 'defaults'>
}

// Double-tap the text to edit it inline (used for the profile name + @id).
export default function EditableText({ value, onChange, variant }: Props) {
  const theme = useTheme<Theme>()
  const [editing, setEditing] = useState(false)

  const v = (theme.textVariants as any)[variant] ?? {}
  const color = (theme.colors as any)[v.color] ?? theme.colors.textPrimary
  const textStyle = { fontSize: v.fontSize, fontWeight: v.fontWeight, color }

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .runOnJS(true)
    .onEnd(() => setEditing(true))

  if (editing) {
    return (
      <TextInput
        value={value}
        onChangeText={onChange}
        autoFocus
        selectTextOnFocus
        onBlur={() => setEditing(false)}
        onSubmitEditing={() => setEditing(false)}
        style={[textStyle, { padding: 0, margin: 0, minWidth: 80 }]}
      />
    )
  }

  return (
    <GestureDetector gesture={doubleTap}>
      <Text variant={variant} accessibilityHint="Double-tap to edit">
        {value}
      </Text>
    </GestureDetector>
  )
}
