
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ 
        title: '', 
        headerShown: false
      }} />

      <Stack.Screen name="tutorial" options={{ 
        title: 'MÉTODOS DE SOLUÇÃO', 
        headerShown: true,
        headerTintColor: '#000000',
        headerStyle: {
        },
        headerTransparent: false,
      }} />

    </Stack>
  );
}