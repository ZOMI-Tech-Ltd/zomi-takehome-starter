import { createBox, createText } from '@shopify/restyle'
import type { Theme } from '../config/theme'

// Themed primitives — use these instead of raw View/Text so styling flows
// through the restyle theme (colors, spacing, radii, text variants).
export const Box = createBox<Theme>()
export const Text = createText<Theme>()
