import Header from "../components/Header";
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
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    let data;
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      data = await res.json();
      // console.log(data.thumbnail);
      // console.log(data);
      setImage(data.thumbnail);
      setDesc(data.description);
      setCategory(data.category);
      setPrice(data.price);
      setRating(data.rating);
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
          <Text fz="xl" fw="900">
            PRODUCT{" "}
            <Text span c="blue" inherit>
              {params.id}
            </Text>
          </Text>
          <Text>Category: {category}</Text>
          <Space h="xl" />
          <Space h="xl" />
          <Text>{desc}</Text>
          <Space h="xl" />
          <Text>Price: ${price}</Text>
          <Text style={{ display: "flex" }}>
            Rating: {rating}
            <Rating defaultValue={2} color="yellow" size="sm" count={1} />
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Product;
