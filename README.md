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

```powershell
npm start
```

Abrir no celular (Expo Go)

- Instale o app Expo Go no seu celular (Android/iOS).
- Certifique-se de que computador e celular estão na mesma rede Wi‑Fi (ou use `--tunnel`).
- No terminal do `npm start` será exibido um QR code — escaneie com o Expo Go.

Se houver problemas com a rede, tente iniciar com tunnel:

```powershell
expo start --tunnel
```

ou

```powershell
npm start -- --tunnel
```

O que foi adicionado / melhorado

- Tela `tutorial-steps`: passo-a-passo com duas visualizações — "mostrar tudo" e "passo a passo".
- Textos e botões escritos em português natural, com legendas que explicam a notação (ex.: "R' = giro anti-horário da face direita").
- Botão "Ver Tutorial Completo" em `cube-details` agora navega corretamente e exibe o tutorial do cubo selecionado.

Dicas rápidas

- Use a opção "Mostrar todas as etapas" para ver todos os algoritmos de uma vez.
- Use "Passo a passo" para aprender devagar — o app mostra a notação e uma explicação simples de cada passo.

Contribuindo

- Faça um fork e crie uma branch com seu ajuste. Prefira commits pequenos e mensagens claras em português.
- Exemplos de commit (humanizados):
  - `Melhora texto do tutorial e adiciona explicação em linguagem simples`
  - `Torna botão CTA interativo e melhora acessibilidade`

Problemas comuns

- Aviso de compatibilidade de versão do `react-dom`: se o terminal sugerir ajustar `react-dom` para `19.1.0`, rode:

```powershell
npm install react-dom@19.1.0
npm install
```

Contato / próximas etapas

- Quer que eu: eu posso commitar essas mudanças no README e tentar subir para o GitHub, ou posso aplicar mais melhorias visuais (ícones, gradientes). Diga o que prefere.

---

Feito com carinho — se quiser, eu crio um changelog curto com as alterações que fiz até agora.
