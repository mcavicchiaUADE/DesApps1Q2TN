import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CustomHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* Icono izquierda: campana */}
      <TouchableOpacity onPress={() => navigation.navigate("Notificaciones")}>
        <Image
          source={require("../assets/bell.png")}
          style={styles.icon}
        />
      </TouchableOpacity >
      <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
        {/* Icono central */}
        <Image
          source={require("../assets/discount.png")}
          style={styles.centerIcon}
        />
      </TouchableOpacity>

      {/* Icono derecha: usuario */}
      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
        <Image
          source={require("../assets/user.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 85,
    backgroundColor: "#7400b8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },
  centerIcon: {
    width: 34,
    height: 34,
  },
});