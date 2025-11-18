import React, { useEffect } from "react";
import { Image, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Importamos el hook de navegación

// Definimos el componente Splash
export default function Splash() {
  // Inicializamos el hook de navegación
  const navigation = useNavigation();

  // El tiempo de espera es de 3 segundos (3000 milisegundos)
  const SPLASH_DURATION = 3000; 

  useEffect(() => {
    // Configuramos el temporizador para la navegación
    const timer = setTimeout(() => {
      // Usamos .replace() para ir a Onboarding y borrar Splash de la pila
      navigation.replace("Onboarding");
    }, SPLASH_DURATION);

    // Función de limpieza: Cancela el temporizador si el componente se desmonta antes
    return () => clearTimeout(timer);
  }, [navigation]); // Dependencia 'navigation' para evitar warnings

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#7400b8" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/discount.png")}
          style={styles.foto}
        />
        <Text style={styles.title}>Descuentin</Text>
        {/* Añadimos un indicador de carga para mejor feedback visual */}
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7400b8",
  },
  title: {
    fontSize: 28, // Aumentado un poco para mejor impacto visual
    fontWeight: "700",
    marginTop: 20, // Espacio entre imagen y título
    color: "#fff",
  },
  foto: {
    width: 150, // Aumentado para mejor visualización en Splash
    height: 150,
    resizeMode: 'contain',
  },
});