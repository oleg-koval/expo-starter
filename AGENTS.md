# Expo Starter agent guide

Read `RULES.md` and `.charter/rules.toml` before changing this template. The shared rules apply to every `oleg-koval` starter; `.charter/checks.toml` maps this repo's checks and records any waivers.

## Stack and structure

- Expo SDK 58, React Native, Expo Router, and strict TypeScript.
- Routes live in `src/app/`; feature UI and logic live together under `src/features/`.
- Keep domain functions pure. Put file, network, clock, and device access at feature edges.
- Never commit `ios/` or `android/`; configure native behavior through Expo app config and plugins.

## Commands

- `npm ci` installs exact dependencies.
- `npm run start` opens Expo CLI.
- `npm run check` runs lint, typecheck, format, file length, and web route smoke checks.
- `npm run ios`, `npm run android`, and `npm run web` start a platform target.

Before touching Expo or React Native APIs, check `package.json`, the matching [SDK 58 reference](https://docs.expo.dev/versions/v58.0.0/), and the relevant page in [Expo's documentation index](https://docs.expo.dev/llms.txt). Use Expo's version-aware installer for Expo packages.

The pre-commit hook runs the same checks. An existing global Git hooks path is preserved; in that environment, run `npm run check` before committing. Use `.github/PULL_REQUEST_TEMPLATE.md` for PRs.
