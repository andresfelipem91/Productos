import { StyleSheet, Text, View } from "react-native";
import Http from "./src/producto/http";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Producto from "./src/producto/Producto.js";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Producto" component={ProductosScreen} />
        <Stack.Screen name="Productos" component={Producto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function ProductosScreen() {
  return (
    <View style={styles.container}>
      <Http />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
