import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Registro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Registrate para{"\n"}
        encontrar los mejores{"\n"}
        descuentos
      </Text>

      <View style={styles.form}>
        <TextInput placeholder="Ingresa tu/s nombre/s" style={styles.input} />
        <TextInput placeholder="Ingresa tu/s apellido/s" style={styles.input} />
        <TextInput placeholder="Ingresa tu correo electrónico" style={styles.input} />
        <TextInput placeholder="Ingresa una contraseña" secureTextEntry style={styles.input} />
        <TextInput placeholder="Ingresa nuevamente tu contraseña" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Inicio")}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>¿Ya tenes una cuenta? Inicia sesión</Text>
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
    marginBottom: 30,
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