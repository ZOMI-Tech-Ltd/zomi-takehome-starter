import { createTheme } from '@shopify/restyle'

// Tokens mapped from the Zomi Figma (ZOMI | AI-native decision layer for food).
// Type scale uses the Figma text tokens (Title/T4, Headline/H5, Body/B2, Caption).
// Figma titles use "Degular" and body uses "PingFang SC"; we fall back to the system
// font here (Degular is licensed and not bundled) but match size/weight/line-height.
const palette = {
  black: '#121217', // Text/primary
  white: '#FFFFFF',
  grey1: '#F7F7F8', // Grey/Grey-1
  grey2: '#EBEBEF', // Grey/Grey-2
  grey4: '#A9A9BC', // Grey/Grey-4
  grey6: '#6C6C85', // Grey/Grey-6
  grey8: '#484858', // Grey/Grey-8
  accent: '#2DCA72', // collected indicator
  backdrop: '#ffffffb2', // Background/backdrop (nav pill)
}

export const theme = createTheme({
  colors: {
    backgroundPrimary: palette.white,
    backgroundLight: palette.grey1,
    borderOutlined: palette.grey2,
    textPrimary: palette.black,
    textSecondary: palette.grey6,
    textMuted: palette.grey4,
    textInverse: palette.white,
    ...palette,
  },
  spacing: {
    // Figma Spacing-0..5 (+ a couple extra)
    s0: 0,
    s1: 4,
    s2: 8,
    s3: 12,
    s4: 16,
    s5: 20,
    s6: 24,
    s8: 32,
    s10: 40,
  },
  borderRadii: {
    r0: 0,
    r2: 8,
    r3: 12,
    r4: 16,
    r5: 20,
    r6: 24,
    round: 360, // Radius-round
  },
  textVariants: {
    defaults: {
      color: 'textPrimary',
      fontSize: 14,
      lineHeight: 20,
    },
    // Title/T4 — Degular Bold 20/20 (screen + section titles)
    titleT4: { fontSize: 20, fontWeight: '700', lineHeight: 20, color: 'textPrimary' },
    // Title/T5 — Degular Bold 16/18
    titleT5: { fontSize: 16, fontWeight: '700', lineHeight: 18, color: 'textPrimary' },
    // Headline/H5 — Semibold 16/24
    headlineH5: { fontSize: 16, fontWeight: '600', lineHeight: 24, color: 'textPrimary' },
    // Body/B2 — Semibold 14/20 (dish name)
    bodyB2: { fontSize: 14, fontWeight: '600', lineHeight: 20, color: 'textPrimary' },
    // Body/B4 — Semibold 12/16
    bodyB4: { fontSize: 12, fontWeight: '600', lineHeight: 16, color: 'textPrimary' },
    // Caption — Regular 10/16
    caption: { fontSize: 10, fontWeight: '400', lineHeight: 16, color: 'textSecondary' },
  },
})

export type Theme = typeof theme
