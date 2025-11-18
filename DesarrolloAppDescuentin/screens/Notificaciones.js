import { View, Text, StyleSheet } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function Notificaciones(navigation) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
        <View style={styles.container}>
          <Text style={styles.title}>Notificaciones</Text>
          <Text style={styles.subtitle}>Aún no tienes notificaciones</Text>
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
});