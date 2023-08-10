import { Text, Button, Image, Flex, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Flex direction="column">
      <Image height={100} width={200} fit="contain" src={product.thumbnail} />
      <Title order={3}> {product.title}</Title>
      <Text>{product.description}</Text>
      <Flex direction="row" align="center" justify="space-between">
        <Text>{product.price}$</Text>
        <Link to={`/product/${product.id}`}>
          <Button>Buy Now</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
