npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid

npm i -D @types/react-dom

npm i -D eslint eslint-config-react-app

npm i -D @types/node

## vite.config.ts
resolve: {
  alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
},

## tsconfig.json
"paths": {
  "@/*": ["./src/*"]
},
