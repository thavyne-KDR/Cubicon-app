// Arquivo: app/_layout.jsx

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Rota Home: Sem cabeçalho */}
      <Stack.Screen name="index" options={{ 
        title: '', 
        headerShown: false
      }} />

      {/* Rota Tutorial: Limpa, dependendo da tela para a correção */}
      <Stack.Screen name="tutorial" options={{ 
        title: 'MÉTODOS DE SOLUÇÃO', 
        headerShown: true,
        headerTintColor: '#000000',
        headerStyle: {
          // Remover qualquer paddingTop ou height manual. Deixar o sistema fazer seu trabalho básico.
        },
        headerTransparent: false,
      }} />
      <Stack.Screen name="cube-details" options={{ 
        headerShown: true,
        headerTintColor: '#000000',
        headerTransparent: false,
      }} />

    </Stack>
  );
}