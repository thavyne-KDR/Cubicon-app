# 🎲 Cubicon App

Este repositório contém o código-fonte de um trabalho acadêmico que consiste no desenvolvimento de uma aplicação mobile utilizando React Native e Expo.

O projeto implementa um sistema de tutoriais interativos para resolução de cubos mágicos (2x2, 3x3, 4x4 e Pyraminx), demonstrando conceitos de navegação entre telas, componentização, e gerenciamento de estado em aplicações mobile modernas.

A aplicação utiliza `expo-router` para navegação baseada em arquivos e apresenta interface responsiva compatível com Android e iOS.

## 🚀 Como Rodar

1. **Entre na pasta do projeto:**

```powershell
cd Cubicon-app-main
```

2. **Instale as dependências:**

```powershell
npm install
```

3. **Inicie o app:**

```powershell
npm start
```

## 📱 Testar no Celular

1. Instale o app **Expo Go** no seu celular (Android/iOS)
2. Escaneie o QR code que aparece no terminal
3. Se não funcionar, use: `npx expo start --tunnel`

## 📁 Estrutura

- `app/index.jsx` - Página inicial
- `app/tutorial.jsx` - Lista de tutoriais
- `app/cube-details.jsx` - Detalhes de cada cubo
- `app/tutorial-steps.jsx` - Tutorial passo a passo
