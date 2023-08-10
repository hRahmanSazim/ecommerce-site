import { Text, Button, Image, Flex, Title } from "@mantine/core";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <Flex
      mih={50}
      justify="flex-start"
      align="flex-start"
      direction="column"
      wrap="wrap"
    >
      <Image src={product.thumbnail}></Image>
      <Title order={2}> {product.title}</Title>
      <Text>{product.description}</Text>
      <Flex direction="row" align="center" justify="space-between">
        <Text>{product.price}</Text>
        <Button>Buy Now</Button>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
