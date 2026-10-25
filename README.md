# Expo Starter

A clean Expo Router and strict TypeScript template for iOS, Android, and web. It starts with two small screens and the same engineering gates used across the Oleg Koval starters: Charter, lint, typecheck, format, pre-commit hooks, CI, CodeQL, and dependency updates.

## Create an app

Use **Use this template** on GitHub, then clone your new repository.

1. Set your app name, slug, and URL scheme in `app.json`.
2. Rename `package.json` and update the lockfile with `npm install --package-lock-only`.
3. Add your own iOS bundle ID, Android package name, icons, and permission text before a store build.
4. Run `npm ci` and `npm run start`.

The template has no Frame branding, photo permissions, purchase IDs, native renderer, or app-specific data. It follows the Expo SDK 58 project structure from the [official Router template](https://docs.expo.dev/router/introduction/). SDK 58 may require a development build on a physical phone during Expo Go's transition; use the matching [Expo guide](https://docs.expo.dev/get-started/create-a-project/) for your device.

## Work on the app

Routes in `src/app/` are thin entry points. Put each feature's UI and logic under `src/features/`. Replace the welcome and about features with your own slices. Use Expo app config and config plugins for native settings; generated `ios/` and `android/` directories stay ignored.

| Command                                           | Purpose                                            |
| ------------------------------------------------- | -------------------------------------------------- |
| `npm run start`                                   | Start Expo CLI                                     |
| `npm run ios` / `npm run android` / `npm run web` | Open a platform target                             |
| `npm run check`                                   | Run the full local quality gate                    |
| `npm test`                                        | Export web routes and check their rendered content |
| `npm run format`                                  | Format source and configuration                    |

`npm ci` installs Lefthook's pre-commit hook in a normal clone. If Git already has a custom hooks path, the installer preserves it; run `npm run check` before commits in that environment.

## Repository checks

`RULES.md` is the shared starter contract. `.charter/rules.toml` is the canonical Charter policy, and `.charter/checks.toml` maps lint, tests, file-length enforcement, PR sections, and the separate Gitleaks check. CI runs Charter and Gitleaks; CodeQL scans JavaScript and TypeScript. `oleg-koval/fleet` manages dependency-update configuration for repositories with the `managed` topic.

This is an app template, so it does not inherit npm publishing or TypeDoc Pages workflows from the TypeScript **library** starter.
