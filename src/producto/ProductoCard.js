import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Text } from "react-native-paper";
import React from "react";

export default function ProductoCard(props) {
  const { productos } = props;
  const navigation = useNavigation();

  const goToProducto = () => {
    // console.log(`Vamos al producto: ${productos.id}`);
    //console.log(navigation.navigate("Productos"));
    navigation.navigate("Productos", { id: productos.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToProducto}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: productos.image }} />

        <Card.Content>
          <Text variant="titleLarge">{productos.title}</Text>
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 150,
    marginBottom: 100,
    backgroundColor: "#4897A0",
  },
});
