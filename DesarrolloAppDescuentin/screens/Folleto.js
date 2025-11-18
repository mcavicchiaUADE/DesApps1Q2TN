import { View, Text, StyleSheet,TouchableOpacity, } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function Folleto({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
        <View style={styles.container}>
          <Text style={styles.title}> - Folletos de Supermercado - </Text>
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