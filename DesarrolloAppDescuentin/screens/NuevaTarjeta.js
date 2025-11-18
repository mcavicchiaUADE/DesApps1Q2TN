import { View, Text, StyleSheet } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function NuevaTarjeta({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
        <View style={styles.container}>
          <Text style={styles.title}> Agregar una nueva tarjeta </Text>
          
        </View>
      <CustomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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