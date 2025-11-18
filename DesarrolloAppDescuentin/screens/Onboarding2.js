import { Image, View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function Onboarding2({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
        <Image
            source={require("../assets/onb2.png")}
            style={styles.foto}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Aprovechá descuentos con tarjetas de diferentes bancos </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding3")}>
                    <Text style={styles.buttonText}> → Continuar </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}> Omitir </Text>
            </TouchableOpacity>
        </View>
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
    color: "#482184",
  },
  foto: {
    width: 100,
    height: 100,
  },
  link: {
    textAlign: "center",
    color: "#007bff",
    fontSize: 15,
    marginTop: 10,
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