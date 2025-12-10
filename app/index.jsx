
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; 
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
            size={22}   
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
    marginBottom: 10, 
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 70, 
    color: '#333',
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    minWidth: 160,
    borderRadius: 36,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
  },
  buttonIcon: {
    marginRight: 10, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});