import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Inicia sesión para{"\n"}
        descubrir nuevos{"\n"}
        descuentos
      </Text>

      <View style={styles.form}>
        <TextInput placeholder="Ingresa tu correo electrónico" style={styles.input} />
        <TextInput placeholder="Ingresa tu contraseña" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Inicio")}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.link}>¿No tenes una cuenta? Registrate</Text>
      </TouchableOpacity>
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
    textAlign: "center",
    marginBottom: 35,
  },
  form: {
    gap: 15,
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#e7d9ef",
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
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
  link: {
    textAlign: "center",
    color: "#007bff",
    fontSize: 15,
    marginTop: 10,
  },
});