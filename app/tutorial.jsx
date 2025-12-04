// Arquivo: app/tutorial.jsx (Solução Definitiva com Correções)

import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from "react-native"; // <-- Adicionado TextInput
import { useRouter } from "expo-router"; // <-- Adicionado useRouter

// Importações das imagens com o caminho CORRETO: ../assets/
import cube2x2Image from '../assets/cubo-2x2.png'; 
import cube3x3Image from '../assets/cubo-3x3.png';
import cube4x4Image from '../assets/cube-4x4.png';
import pyraminxImage from '../assets/cubo-pyraminx.png'; 

// Estrutura de dados para os cubos
const cubes = [
  { name: 'Cubo 2x2', image: cube2x2Image, steps: '• Método das Camadas\n• Resolver primeira camada\n• Orientação das últimas peças\n' },
  { name: 'Cubo 3x3', image: cube3x3Image, steps: '• Fazer a cruz\n• Resolver a primeira e segunda camada\n• OLL (orientar últimas peças)\n• PLL (permuta final)\n' },
  { name: 'Cubo 4x4', image: cube4x4Image, steps: '• Montar centros\n• Parear arestas\n• Resolver como 3x3\n' },
  { name: 'Pyraminx', image: pyraminxImage, steps: '• Ajustar pontas\n• Resolver camadas laterais\n• Finalizar topo\n' },
];

export default function TutorialScreen() {
  const router = useRouter(); // Inicializa o router

  // Função para navegar e passar o parâmetro
  const navigateToDetails = (cubeName) => {
    router.push({
      pathname: "/cube-details", // Rota para a nova tela de detalhes
      params: { name: cubeName } // Parâmetro sendo passado (Requisito 2)
    });
  };
  
  return (
    <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollContent}
    > 
        {/* ESPAÇADOR: Adiciona um View vazio para empurrar o conteúdo para baixo. */}
        <View style={{ height: 35 }} /> 
        
        <Text style={styles.title}>CUBOS DE RUBIK</Text> 

        {/* CAMPO DE TEXTO (Requisito 3) */}
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar método de solução..."
          placeholderTextColor="#999"
        />

        {/* Renderiza os cards clicáveis */}
        {cubes.map((cube, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => navigateToDetails(cube.name)} // Passagem de parâmetro
          >
            <View style={styles.card}>
              <Image source={cube.image} style={styles.cubeImage} /> 
              <Text style={styles.cubeName}>{cube.name}</Text>
              <Text style={styles.steps}>{cube.steps}</Text>
            </View>
          </TouchableOpacity>
        ))}
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 0, 
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: '#333',
  },
  searchInput: { // Estilo para o Campo de Texto
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3, 
  },
  cubeImage: {
    width: 100, 
    height: 100, 
    alignSelf: "center", 
    marginBottom: 15,
    resizeMode: 'contain',
  },
  cubeName: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: '#333',
  },
  steps: { 
    fontSize: 15,
    lineHeight: 24,
    color: '#555',
  },
});
