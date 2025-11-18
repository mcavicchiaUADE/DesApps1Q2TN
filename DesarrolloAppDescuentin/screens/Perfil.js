import { View, Text, StyleSheet,TouchableOpacity, } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function Perfil({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
        <View style={styles.container}>
          <Text style={styles.title}> - Mi perfil - </Text>
          <Text style={styles.title}> Mis Tarjetas:  </Text>
        </View>
        <View style={styles.form}>
        </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NuevaTarjeta")}>
                              <Text style={styles.buttonText}> Agregar Nueva Tarjeta </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.buttonText}> Cerrar Sesión </Text>
          </TouchableOpacity>
      <CustomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  form: {
    gap: 15,
    marginBottom: 25,
  },
   button: {
    backgroundColor: "#7400b8",
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});