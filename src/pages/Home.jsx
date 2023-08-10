import { SimpleGrid, Container, Space } from "@mantine/core";
import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products/");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchData();
  }, []);

  return (
    <Container style={{ width: "100%" }}>
      <Space h="xl" />
      <SimpleGrid cols={4} spacing={64} verticalSpacing="xl">
        {products.map((product) => (
          <ProductItem product={product}></ProductItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
