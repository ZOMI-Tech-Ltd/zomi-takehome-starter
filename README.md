# Zomi Take-Home — Starter

Read `ASSIGNMENT.md` first. This is the code you'll extend.

## Run

Use **npm** (a `package-lock.json` is committed — don't switch package managers).
Node 20 recommended (`.nvmrc`). You need the **Expo Go** app on your iPhone (or an iOS
simulator). No Xcode build, pods, or secrets needed.

```bash
npm install
npm start          # press i for the iOS simulator, or scan the QR in Expo Go
```

If the QR won't open on a physical phone, run `npx expo start --tunnel` (works across
networks).

## Optional: share a preview (EAS Update)

Lets a reviewer open your app on a phone without cloning. Uses your **own** Expo account:

```bash
npx eas login
npx eas init                 # links a project under your account
npx eas update --branch preview -m "submission"
```

Then share the preview link/QR it prints. (`expo-updates` + `eas.json` are already set up.)

## Where things live

| Path | What it is |
|---|---|
| `src/screens/DiscoverScreen.tsx` | **You build the feed.** Header/frame provided. |
| `src/screens/ProfileScreen.tsx` | **You add the collected carousel.** Frame provided. |
| `src/navigation/RootTabs.tsx` | Nav (Discover + Profile). **You add the Collect tab.** |
| `src/models/collected.ts` | dva model that owns collected state. Wire it; don't rewrite. |
| `src/services/dishService.ts` · `src/data/dishes.ts` | mock dishes + `Dish` type |
| `src/config/theme.ts` · `src/components/ui.ts` | restyle theme/tokens + `Box`/`Text` (see the screen headers for usage) |
| `src/store/index.ts`, `App.tsx` | dva + providers + nav (wired) |

## Patterns to follow

- **State:** `useSelector` to read, `useDispatch` to dispatch `collected/toggle`. Use the
  exported `selectors`. Don't add another state library.
- **Collect action:** double-tap a card (react-native-gesture-handler is installed).
- **Styling:** use the theme (restyle `Box`/`Text`), not hardcoded values. Gradients via
  `expo-linear-gradient`.
