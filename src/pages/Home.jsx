import { Flex } from "@mantine/core";
import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products/");
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    }
    fetchData();
  }, []);

  return (
    <Flex direction="row" wrap="wrap">
      {products.map((product) => (
        <ProductItem product={product}></ProductItem>
      ))}
    </Flex>
  );
};

export default Home;
