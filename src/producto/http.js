import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import ProductoCard from "./ProductoCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Http() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        numColumns={2}
        renderItem={({ item }) => <ProductoCard productos={item} />}
        style={styles.tamanio}
      ></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tamanio: {
    width: 400,
    height: 500,
  },
});
