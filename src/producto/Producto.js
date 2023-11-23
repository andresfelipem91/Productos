import { Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Text } from "react-native-paper";

export default function Producto(props) {
  const [data, setData] = useState([]);
  const {
    route: { params },
  } = props;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params]);
  return (
    <Card>
      <Text variant="headlineLarge">{data.title}</Text>
      <Card.Cover
        source={{ uri: data.image }}
        style={{ width: 300, height: 200 }}
      />
      <Card.Content>
        <Text variant="titleLarge">${data.price}</Text>
        <Text>{data.description}</Text>
      </Card.Content>
    </Card>
  );
}
