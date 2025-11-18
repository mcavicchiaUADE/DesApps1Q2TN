import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, TouchableOpacity } from "react-native";
import Inicio from "../screens/Inicio";
import Login from "../screens/Login";
import Registro from "../screens/Registro";
import CustomHeader from "../components/CustomHeader"; 
import Notificaciones from "../screens/Notificaciones";
import Perfil from "../screens/Perfil";
import NuevaTarjeta from "../screens/NuevaTarjeta";
import Onboarding from "../screens/Onboarding";
import Onboarding2 from "../screens/Onboarding2";
import Onboarding3 from "../screens/Onboarding3";
import Splash from "../screens/Splash";
import Folleto from "../screens/Folleto";
import Busqueda from "../screens/Busqueda";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
      }}
    >
      <Stack.Screen name="Inicio" component={Inicio} 
/>
      <Stack.Screen name="Splash" component={Splash} options={{ 
          headerShown: false 
        }} />
      <Stack.Screen name="Login" component={Login} options={{ 
          headerShown: false 
        }}/>
      <Stack.Screen name="Registro" component={Registro} options={{ 
          headerShown: false 
        }}/>
      <Stack.Screen name="Notificaciones" component={Notificaciones} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ 
          headerShown: false 
        }}/>
      <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ 
          headerShown: false 
        }}/>
      <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ 
          headerShown: false 
        }}/>
      <Stack.Screen name="NuevaTarjeta" component={NuevaTarjeta} />
      <Stack.Screen name="Folleto" component={Folleto} />
      <Stack.Screen name="Busqueda" component={Busqueda} />

    </Stack.Navigator>
  );
}