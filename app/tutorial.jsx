// Arquivo: app/tutorial.jsx (Solução Definitiva)

import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
// IMPORTADO: StatusBar

// Importações das imagens com o caminho CORRETO: ../assets/
import cube2x2Image from '../assets/cubo-2x2.png'; 
import cube3x3Image from '../assets/cubo-3x3.png';
import cube4x4Image from '../assets/cube-4x4.png';
import pyraminxImage from '../assets/cubo-pyraminx.png'; 

export default function TutorialScreen() {
  
  return (
    <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollContent}
    > 
        {/* ESPAÇADOR: Adiciona um View vazio para empurrar o conteúdo para baixo. 
           O valor 35-40px é geralmente seguro para limpar o notch/barra. */}
        <View style={{ height: 35 }} /> 
        
        <Text style={styles.title}>CUBOS DE RUBIK</Text> 

        {/* CUBO 2X2 */}
        <View style={styles.card}>
          <Image source={cube2x2Image} style={styles.cubeImage} /> 
          <Text style={styles.cubeName}>Cubo 2x2</Text>
          <Text style={styles.steps}>
            • Método das Camadas{"\n"}
            • Resolver primeira camada{"\n"}
            • Orientação das últimas peças{"\n"}
          </Text>
        </View>

        {/* ... (Resto dos cubos mantidos) ... */}

        {/* CUBO 3X3 */}
        <View style={styles.card}>
          <Image source={cube3x3Image} style={styles.cubeImage} />
          <Text style={styles.cubeName}>Cubo 3x3</Text>
          <Text style={styles.steps}>
            • Fazer a cruz{"\n"}
            • Resolver a primeira e segunda camada{"\n"}
            • OLL (orientar últimas peças){"\n"}
            • PLL (permuta final){"\n"}
          </Text>
        </View>

        {/* CUBO 4X4 */}
        <View style={styles.card}>
          <Image source={cube4x4Image} style={styles.cubeImage} />
          <Text style={styles.cubeName}>Cubo 4x4</Text>
          <Text style={styles.steps}>
            • Montar centros{"\n"}
            • Parear arestas{"\n"}
            • Resolver como 3x3{"\n"}
          </Text>
        </View>

        {/* PYRAMINX */}
        <View style={styles.card}>
          <Image source={pyraminxImage} style={styles.cubeImage} />
          <Text style={styles.cubeName}>Pyraminx</Text>
          <Text style={styles.steps}>
            • Ajustar pontas{"\n"}
            • Resolver camadas laterais{"\n"}
            • Finalizar topo{"\n"}
          </Text>
        </View>
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
    // Remover o paddingTop antigo (agora temos o espaçador)
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