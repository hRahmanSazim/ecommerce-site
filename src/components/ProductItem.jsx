import { Text, Button, Image, Flex, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Flex direction="column">
      <Link style={{ color: "black" }} to={`/product/${product.id}`}>
        <Image height={100} width={200} fit="contain" src={product.thumbnail} />
        <Title order={3}> {product.title}</Title>
      </Link>
      <Text>{product.description}</Text>
      <Flex direction="row" align="center" justify="space-between">
        <Text>{product.price}$</Text>
        <Button>Buy Now</Button>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
