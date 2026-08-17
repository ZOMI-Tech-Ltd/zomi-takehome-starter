# Zomi Mobile — Frontend Take-Home

Thanks for taking the time. This is a small slice of our real work: you'll **extend an
existing React Native codebase** using the patterns we use every day.

- **Expected effort:** ~3–4.5 hours with AI assistance. **Partial completion is fine** —
  we grade what you finish, and quality beats coverage.
- **Stack:** React Native (Expo) + TypeScript · state with **dva** (redux + redux-saga) ·
  styling with **@shopify/restyle** · nav with **react-navigation** · lists with
  **@shopify/flash-list** · **expo-linear-gradient** · **react-native-gesture-handler**.
- You may use AI. Disclose what you used and be ready to explain every line.

## The product

Zomi helps people discover **dishes** and **collect** the ones they love:

> **Discover feed → double-tap a card to collect → it shows up on the Collect tab & Profile.**

## Setup

Use **npm** (a `package-lock.json` is committed — please don't switch to yarn/pnpm, so
everyone runs the same versions). Node 20 recommended (see `.nvmrc`).

```bash
npm install
npm start        # press i for the iOS simulator, or scan the QR in Expo Go
```

Boots to a 2-tab nav (**Discover · Profile**). You'll add a **Collect** tab. See
`README.md` for the file map.

## Ground rules

- Use the provided stack; **don't add** another state, styling, or navigation library.
- **Don't upgrade, downgrade, or swap** dependencies, and don't `eject` — keep it
  **Expo Go compatible**.
- Style through the **theme tokens** (no hardcoded hex/spacing).
- Keep console output clean.

## A note on judgment

The starter and Figma are a starting point, not a spec to follow blindly. If something
looks off or inconsistent, use your judgment — fix it sensibly **within the provided
stack and patterns**, and note what you changed (and why) in your README. The Figma is
**visual direction, not a pixel-perfect spec.**

**What we weigh most:** meeting the core requirements, matching the Figma's look + tokens,
clean/reusable components, correct state wiring (the collected count stays in sync
everywhere), and being able to explain your choices.

## Design reference (Figma)

The **Figma link is in your invitation** — match its visual direction + tokens for the
Discover, Collect, and Profile screens. Use judgment where something isn't specified.

## What you're given

- `src/models/collected.ts` — the **dva model** that owns collected dishes (with
  `count` / `items` / `isCollected` selectors), wired into the store. **Don't rewrite it
  — wire it up.**
- `src/services/dishService.ts` + `src/data/dishes.ts` — mock dishes and the `Dish` type.
- `src/config/theme.ts` + `src/components/ui.ts` — theme/tokens + `Box`/`Text`. The
  provided screen headers show how to use them.
- `src/navigation/RootTabs.tsx` — the nav (Discover + Profile), **no gradient**.
- `src/screens/DiscoverScreen.tsx`, `ProfileScreen.tsx` — provided **frames** with TODOs.

## What to build

1. **Dish cards** — build **both** card types from the Figma (layout + tokens), including
   the collected (bookmark) indicator: `type1` (original) and `type2` (featured, with the
   **linear gradient** overlay). Design them to be reused across the feed, the Collect
   grid, and the Profile carousel.
2. **Discover feed** — a vertically scrollable page of **horizontally scrollable rows**,
   grouped by card type (`dishService.getSections()`) — featured rows use type2, the rest
   type1.
3. **Double-tap to collect** — double-tapping a card dispatches `collected/toggle`. The
   bookmark badge reflects state, and the **count updates everywhere**.
4. **Collect tab** — add it to the nav (bookmark icon + the nav **linear gradient**). It
   shows collected dishes in a **2-column grid** with a meaningful **empty state**.
5. **Profile** — add a horizontal **Collected carousel** to the provided frame; it stays
   in sync with collect state. **Set your own name and @id** on the profile
   (double-tap the `userName` / `@zomi123` placeholders to edit) so your submission is
   personalized.
6. **Polish** — match Figma, use theme tokens (no hardcoded hex/spacing), smooth
   scrolling and a smooth collect transition; accessible labels + ~44px targets.

Reuse your dish card across the feed row, the Collect grid, and the Profile carousel
rather than duplicating it.

**Not required:** persistence across a cold relaunch (in-memory dva is fine).

## What to submit

1. A **branch or PR** on this repo.
2. A short **README addition**: approach, one trade-off, what you'd do next, and an
   **AI-tool disclosure** (what you used + what you personally reviewed/changed).
3. A **3–5 min screen-recording (中文解说)** that **briefly shows the core flow working**
   (collect a dish → count updates → it appears on Collect + Profile) **and walks through
   your own code** — why you structured components/state as you did, and one decision you
   weren't sure about.
4. *(Optional)* An **EAS Update preview** so we can open it on a phone without cloning:
   `npx eas login` → `npx eas init` → `npx eas update --branch preview -m "submission"`,
   then share the preview link/QR. Uses your own Expo account; see `README.md`.

After a passing review, we'll send a short **timed follow-up question** or two. No live
interview loop.

## How it's reviewed

| Area | What matters |
|---|---|
| Figma fidelity | Cards + surfaces match layout, tokens, gradient |
| Component reuse | One dish card reused across row / grid / carousel; sensible type1↔type2 sharing |
| State wiring | `collected` model used correctly; count + all surfaces stay in sync |
| Interaction | Double-tap collect; smooth scroll/transition |
| Judgment | Sensible choices where Figma is open; what you chose to finish vs. cut |
| Communication | Clear README + walkthrough video; candid AI disclosure |
