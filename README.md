# Cubicon App

Bem-vindo(a) ao repositório do Cubicon — um app simples com tutoriais para resolver cubos (2x2, 3x3, 4x4 e Pyraminx), feito com Expo e `expo-router`.

Este README explica rapidamente como rodar o projeto no seu computador e como abrir no celular, além de descrever a nova tela de tutorial passo-a-passo (notação R, L, U, D, F, B) com explicações em linguagem natural.

**Principais arquivos**

- `App.js`, `index.js` – ponto de entrada do app.
- `app/_layout.jsx` – layout e rotas (expo-router).
- `app/index.jsx` – página inicial.
- `app/tutorial.jsx` – lista de tutoriais e busca.
- `app/cube-details.jsx` – tela de detalhes de cada cubo (agora com botão que abre o tutorial completo).
- `app/tutorial-steps.jsx` – nova tela: passo-a-passo com notação e explicações humanizadas.

Como rodar (desenvolvimento)

1. Abra um terminal na pasta do projeto:

```powershell
cd C:\Users\thavy\Downloads\cubiconapp
```

2. Instale dependências (se ainda não instalou):

```powershell
npm install
```

3. Inicie o servidor Expo/Metro:

# Cubicon — Instruções rápidas

Pequenas instruções para rodar e testar o app localmente.

**Rodar em desenvolvimento**

- Abra um terminal na pasta do projeto:

```powershell
cd C:\Users\thavy\Downloads\cubiconapp
```

- Instale dependências (se ainda não instalou):

```powershell
npm install
```

- Inicie o servidor Expo/Metro:

```powershell
npm start
```

**Abrir no celular (Expo Go)**

- Instale o app "Expo Go" (Android / iOS).
- Na mesma rede Wi‑Fi, escaneie o QR mostrado pelo `npm start` no terminal ou DevTools.
- Se a rede bloquear o acesso, inicie com tunnel:

```powershell
npx expo start --tunnel
```

**O que testar**

- Em `app/index.jsx` e `app/tutorial.jsx` você encontra a lista de cubes.
- Em `app/cube-details.jsx` abra um cubo e toque em "Ver Tutorial Completo" para ver o passo-a-passo (notação + explicação humana).

**Problemas comuns**

- Caso veja aviso de compatibilidade (react-dom), rode:

```powershell
npm install react-dom@19.1.0
npm install
```

Pronto — se quiser eu comito esta mudança no README e tento empurrar para o GitHub. Se preferir, mantenho o README curto ainda mais (apenas comandos). Diga como prefere.
