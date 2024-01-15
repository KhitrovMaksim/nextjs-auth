# Next.js with authentication

## How to create your own project:

```shell
npx create-next-app . --use-npm --ts --eslint --tailwind --src-dir --app --import-alias "@/*"
npm i -D prettier eslint-config-prettier
npm i next-auth@beta
npm i lucide-react
npx shadcn-ui@latest init
# TypeScript: yes,
# style: Default,
# base color: Slate,
# globals.css: src/app/globals.css,
# CSS variables: yes,
# tailwind prefix: (Leave blank if not)
# tailwind.config.js: tailwind.config.ts,
# components: @/shared,
# utils: @/shared/ui/utils
# React Server Components: yes
# components.json: Y
```

## Commands

```shell
# http://localhost:3000
npm run dev

# Prettier
npm run prettier

# Generate component
npx shadcn-ui@latest add button
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
```
## Project links
- http://localhost:3000
- http://localhost:3000/dashboard/settings
- http://localhost:3000/auth/sign-in
- http://localhost:3000/auth/sign-up
- http://localhost:3000/api/auth/providers
- http://localhost:3000/auth/api/providers
## Change files
### layout.tsx
from:
```tsx

```
and
```tsx
```
to
```tsx
import React from 'react';
```
and

### .gitignore
from:
```text
# local env files
.env*.local
```
to:
```text
# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
```
### tsconfig.json

from:

```json
"paths": {
  "@/*": ["./src/*"]
}
```
and
```json
"target": "es5",
```

to:

```json
"paths": {
  "@/*": ["./src/*"],
  "auth": ["./auth"]
}
```
and
```json
"target": "es6",
```
### .eslintrc.json

from:

```json
{
  "extends": "next/core-web-vitals"
}
```

to:

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

### tailwind.config.js

from:

```js
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
],
```

to:

```js
content: ["./src/**/*.{ts,tsx}"],
```

### package.json

from:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
  },
```

to:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prettier": "prettier -w ."
  },
```

## Add files
### auth.ts
To directory: /
```typescript

```

### .prettierrc

To directory: /

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "printWidth": 120,
  "trailingComma": "all"
}
```
### .env
To generate secret: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```text
AUTH_SECRET=bafabce90cd25a6fa76c495d53d5a1f5c0ebab5420869e46741e1c78fc59a559
```

## Naming convention
- Component name in page.tsx: DashboardPage, SingInPage, AuthenticationPage
- folder name: sing-in, dashboard

## Snippets
Intellij Ide - fsf
```tsx
import * as React from 'react';

export default function HomePage(): React.JSX.Element {
    return (<div><h1>Home page</h1></div>);
}

```
