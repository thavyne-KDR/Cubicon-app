import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; 

// Importação do logo
import logoImage from "../assets/logo.png";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.title}></Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/tutorial")}
      >
        <View style={styles.buttonContent}>
          <Ionicons 
            name="cube-outline" 
            size={28}   
            color="#fff" 
            style={styles.buttonIcon} 
          />
          <Text style={styles.buttonText}>START</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff', 
  },
  logo: {
    width: 350,
    height: 350,
    // AJUSTE: Menor espaçamento aqui
    marginBottom: 10, 
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    // AJUSTE: Maior espaçamento aqui para empurrar o botão
    marginBottom: 70, 
    color: '#333',
  },
  button: {
    backgroundColor: "#007AFF", 
    // AJUSTE: Diminuir um pouco o tamanho
    paddingVertical: 16,      
    paddingHorizontal: 70,    
    borderRadius: 50,           
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // AJUSTE: Tentar centralizar o centro visual do texto/ícone
    marginRight: -10, 
  },
  buttonIcon: {
    marginRight: 10, 
  },
  buttonText: {
    color: "#fff",
    // AJUSTE: Texto levemente menor
    fontSize: 22, 
    fontWeight: "700",
  },
});