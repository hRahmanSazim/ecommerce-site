import {
  Center,
  SimpleGrid,
  Image,
  Button,
  Box,
  Text,
  Flex,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState("");

  const nums = [];
  useEffect(() => {
    const arr = new Set();
    while (arr.size !== 8) {
      arr.add(Math.floor(Math.random() * 30) + 1);
    }
    for (const num of arr.values()) {
      nums.push(num);
    }
    setItems(nums);

    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products/");
      const data = await res.json();
      setProducts(data);
      setImage1(data.products[nums[0] - 1].images[1]);
      setImage2(data.products[nums[1] - 1].images[1]);
      setImage3(data.products[nums[2] - 1].images[1]);
      setImage4(data.products[nums[3] - 1].images[1]);
      setImage5(data.products[nums[4] - 1].images[1]);
      setImage6(data.products[nums[5] - 1].images[1]);
      setImage7(data.products[nums[6] - 1].images[1]);
      setImage8(data.products[nums[7] - 1].images[1]);
    }
    fetchData();
  }, []);

  return (
    <SimpleGrid cols={4} spacing="xl" verticalSpacing="xl">
      <Box className="first" id="1">
        <Image maw={240} mx="auto" radius="md" src={image1} alt="Product 1" />
        <Link to={`/product/${items[0]}`}>Go To Product!! </Link>
        <Button> Buy!</Button>
      </Box>
      <Box id="2">
        <Image maw={240} mx="auto" radius="md" src={image2} alt="Product 2" />
        <Center>
          <Link to={`/product/${items[1]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
      <Box id="3">
        <Image maw={240} mx="auto" radius="md" src={image3} alt="Product 3" />
        <Center>
          <Link to={`/product/${items[2]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
      <Box id="4">
        <Image maw={240} mx="auto" radius="md" src={image4} alt="Product 4" />
        <Center>
          <Link to={`/product/${items[3]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
      <Box id="5">
        <Image maw={240} mx="auto" radius="md" src={image5} alt="Product 5" />
        <Center>
          <Link to={`/product/${items[4]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
      <Box id="6">
        <Image maw={240} mx="auto" radius="md" src={image6} alt="Product 6" />
        <Center>
          <Link to={`/product/${items[5]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
      <Box id="7">
        <Image maw={240} mx="auto" radius="md" src={image7} alt="Product 7" />
        <Center>
          <Link to={`/product/${items[6]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
      <Box id="8">
        <Image maw={240} mx="auto" radius="md" src={image8} alt="Product 8" />
        <Center>
          <Link to={`/product/${items[7]}`}>Go To Product!! </Link>
          <Button>Buy!</Button>
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default Home;
