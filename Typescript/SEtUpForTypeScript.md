⚙️ 1. Initialize TypeScript Project

In your terminal:

bash:-

npm init -y
npm install typescript --save-dev
npx tsc --init


🛠️ 2. Recommended tsconfig.json Settings

json:-
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "noImplicitAny": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

✅ Why it’s amazing:

strict: true ensures full type safety

rootDir & outDir separate your source from the build output

esModuleInterop allows using import/export with CommonJS

resolveJsonModule helps import .json files

🧱 3. Project Folder Structure

my-typescript-app/
├── node_modules/
├── src/
│   └── index.ts
├── dist/               ← compiled JS files
├── tsconfig.json
└── package.json

🔌 4. Install Useful Dev Tools

bash

npm install --save-dev ts-node nodemon eslint prettier

🔁 Add Scripts in package.json:
json

"scripts": {
  "start": "node dist/index.js",
  "build": "tsc",
  "dev": "nodemon src/index.ts"
}


🎨 5. ESLint + Prettier Setup (Optional but Recommended)

bash

npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
Create .eslintrc.json:

json

{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn"
  }
}

Create .prettierrc:

json:-

{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}


💡 Tips
Use VS Code extensions:
✅ ESLint
✅ Prettier
✅ TypeScript Hero

Enable "formatOnSave": true in settings

Use ts-node for instant TypeScript execution

