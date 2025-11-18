import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio( navigation ) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenida Laura !</Text>
        <Text style={styles.subtitle}>Tenes los siguientes descuentos</Text>
      </View>

      {/* Navbar al fondo */}
      <CustomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 25,
  },
  loginButton: {
    backgroundColor: "#7400b8",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 12,
    width: "70%",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});