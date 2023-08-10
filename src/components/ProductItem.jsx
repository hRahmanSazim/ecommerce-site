import { Text, Button, Image, Flex, Title } from "@mantine/core";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <Flex direction="column">
      <Image height={100} width={200} fit="contain" src={product.thumbnail} />
      <Title order={3}> {product.title}</Title>
      <Text>{product.description}</Text>
      <Flex direction="row" align="center" justify="space-between">
        <Text>{product.price}$</Text>
        <Button>Buy Now</Button>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
