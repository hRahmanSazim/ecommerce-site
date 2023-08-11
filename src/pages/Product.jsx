import "./product.css";
import { useParams } from "react-router-dom";
import {
  Center,
  Container,
  Image,
  Text,
  Box,
  Space,
  Rating,
} from "@mantine/core";
import { useEffect, useState } from "react";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchData().catch(console.error);
  }, [params.id]);
  return (
    product && (
      <Box className="product-page">
        <Container py={45}>
          <Box className="product-image">
            <Center maw={400} mx="auto">
              <Image
                maw={400}
                mx="auto"
                radius="md"
                src={product.thumbnail}
                alt="Product"
              />
            </Center>
          </Box>
        </Container>
        <Box>
          <Text fz="xl" fw="900">
            {product.title}
          </Text>
          <Space h="sm" />
          <Text>Category: {product.category}</Text>
          <Space h="xl" />
          <Text>{product.description}</Text>
          {/* <Space h="xl" /> */}
          <Text lineClamp={1} display="flex">
            Price: ${product.price} <Space w="xl" />
            Rating: {product.rating}
            <Rating defaultValue={2} color="yellow" size="sm" count={1} />
          </Text>
        </Box>
      </Box>
    )
  );
};

export default Product;
