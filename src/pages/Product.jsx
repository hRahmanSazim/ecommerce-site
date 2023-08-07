import Header from "../components/Header";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import { Center, Container, Image, Text, Box } from "@mantine/core";
import { useEffect, useState } from "react";

const Product = () => {
  const params = useParams();
  const [image, setImage] = useState("");
  // console.log(params);
  useEffect(() => {
    let data;
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      data = await res.json();
      console.log(data.thumbnail);
      setImage(data.thumbnail);
    }
    fetchData().catch(console.error);
    // fetch(`https://dummyjson.com/products/${params.id}`)
    //   .then((res) => res.json())
    //   .then((obj) => {
    //     data = obj;
    //   })
    //   .then(console.log(data));
    // // setImage(data.images[1]);
  }, [params.id]);

  return (
    <>
      <Box className="product-page">
        <Container py={45}>
          <Box className="product-image">
            <Center maw={400} mx="auto">
              <Image
                maw={400}
                mx="auto"
                radius="md"
                src={image}
                alt="Product"
              />
            </Center>
          </Box>
        </Container>
        <Box className="product-info">
          <Text></Text>
        </Box>
      </Box>
    </>
  );
};

export default Product;
