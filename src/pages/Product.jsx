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
  const [title, setTitle] = useState("");

  useEffect(() => {
    let data;
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      data = await res.json();
      setImage(data.thumbnail);
      setDesc(data.description);
      setCategory(data.category);
      setPrice(data.price);
      setRating(data.rating);
      setTitle(data.title);
    }
    fetchData().catch(console.error);
  }, [params.id]);

  return (
    <Box className="product-page">
      <Container py={45}>
        <Box className="product-image">
          <Center maw={400} mx="auto">
            <Image maw={400} mx="auto" radius="md" src={image} alt="Product" />
          </Center>
        </Box>
      </Container>
      <Box>
        <Text fz="xl" fw="900">
          {title}
        </Text>
        <Space h="sm" />
        <Text>Category: {category}</Text>
        <Space h="xl" />
        <Text>{desc}</Text>
        {/* <Space h="xl" /> */}
        <Text lineClamp={1} display="flex">
          Price: ${price} <Space w="xl" />
          Rating: {rating}
          <Rating defaultValue={2} color="yellow" size="sm" count={1} />
        </Text>
      </Box>
    </Box>
  );
};

export default Product;
