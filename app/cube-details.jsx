// Arquivo: app/cube-details.jsx (Melhorado)

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

// Importações das imagens (necessário para usar a imagem dinamicamente)
import cube2x2Image from '../assets/cubo-2x2.png'; 
import cube3x3Image from '../assets/cubo-3x3.png';
import cube4x4Image from '../assets/cube-4x4.png';
import pyraminxImage from '../assets/cubo-pyraminx.png'; 

// Estrutura de dados para os cubos (replicada para acesso fácil)
const cubesData = {
  'Cubo 2x2': { image: cube2x2Image, steps: '• Método das Camadas\n• Resolver primeira camada\n• Orientação das últimas peças\n' },
  'Cubo 3x3': { image: cube3x3Image, steps: '• Fazer a cruz\n• Resolver a primeira e segunda camada\n• OLL (orientar últimas peças)\n• PLL (permuta final)\n' },
  'Cubo 4x4': { image: cube4x4Image, steps: '• Montar centros\n• Parear arestas\n• Resolver como 3x3\n' },
  'Pyraminx': { image: pyraminxImage, steps: '• Ajustar pontas\n• Resolver camadas laterais\n• Finalizar topo\n' },
};

export default function CubeDetailsScreen() {
  const { name } = useLocalSearchParams();
  const cube = cubesData[name] || null;

  // Define o título da tela
  const screenTitle = name ? `Detalhes: ${name}` : 'Detalhes do Cubo';

  return (
    <>
      <Stack.Screen options={{ 
        title: screenTitle,
        headerTintColor: '#000000',
        headerTransparent: false,
      }} />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        
        {cube ? (
          <View style={styles.card}>
            <Image source={cube.image} style={styles.cubeImage} /> 
            <Text style={styles.cubeName}>{name}</Text>
            
            <View style={styles.separator} />

            <Text style={styles.sectionTitle}>Passos do Método:</Text>
            <Text style={styles.stepsText}>{cube.steps}</Text>

            {/* Adicionando um botão de exemplo para mais interatividade */}
            <View style={styles.buttonContainer}>
              <Text style={styles.button}>Ver Tutorial Completo</Text>
            </View>

          </View>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Cubo não encontrado ou parâmetro ausente.</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 600, // Limite de largura para telas maiores
    padding: 25,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, 
    alignItems: 'center',
  },
  cubeImage: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
    resizeMode: 'contain',
  },
  cubeName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  stepsText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#007AFF",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    fontSize: 16,
    fontWeight: '600',
    overflow: 'hidden', // Necessário para o borderRadius funcionar no Text em algumas plataformas
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  }
});
