import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; 
import { useNavigation } from "@react-navigation/native";

export default function CustomNavbar() {
   const insets = useSafeAreaInsets();
   const navigation = useNavigation();
  return (
     <View style={[styles.navbarContainer, { paddingBottom: insets.bottom }]}>
      {/* Icono Izquierda */}
      <TouchableOpacity onPress={() => navigation.navigate("Folleto")}>
        <Image
          source={require("../assets/menu.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Icono Centro grande */}
      <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate("Scanner")}>
        <Image
          source={require("../assets/descuentin.png")}
          style={styles.centerIcon}
        />
      </TouchableOpacity>

      {/* Icono Derecha */}
      <TouchableOpacity onPress={() => navigation.navigate("Busqueda")}>
        <Image
          source={require("../assets/search.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "#7400b8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 6,
  },

  icon: {
    width: 32,
    height: 32,
    tintColor: "#fff",
  },

  centerButton: {
    backgroundColor: "#7400b8",
    padding: 10,
    borderRadius: 50,
  },

  centerIcon: {
    width: 45,
    height: 45,
  }
});