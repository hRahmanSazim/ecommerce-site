import { SimpleGrid, Image, Text, Button, Box } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [image, setImage] = useState("https://i.ibb.co/4dTYNvQ/Image-1.png");
  // const [title, setTitle] = useState("product description");

  // const handleClick = (e) => {
  //   const givenId = e.currentTarget.id;
  //   console.log(givenId);
  // };

  // async function fetchData(e, id) {
  //   // const id = e.target.id;
  //   // console.log(e.target);
  //   // console.log(e.target.id);
  //   const response = await fetch(`https://dummyjson.com/products/${id}`);
  //   const data = await response.json();
  //   console.log(data.products[2]);
  // }

  return (
    <SimpleGrid cols={4} spacing="xl" verticalSpacing="xl">
      <Box className="first" id="1">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 1" />
        <Link to="/product/1">Go To Product!! </Link>
        <Button>Buy!</Button>
      </Box>
      <Box id="2">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 2" />

        <Button>Load product!</Button>
      </Box>
      <Box id="3">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 3" />
        <Text>product description</Text>
        <Button>Buy Now</Button>
      </Box>
      <Box id="4">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 4" />
        <Text>product description</Text>
        <Button>Buy Now</Button>
      </Box>
      <Box id="5">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 5" />
        <Text>product description</Text>
        <Button>Buy Now</Button>
      </Box>
      <Box id="6">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 6" />
        <Text>product description</Text>
        <Button>Buy Now</Button>
      </Box>
      <Box id="7">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 7" />
        <Text>product description</Text>
        <Button>Buy Now</Button>
      </Box>
      <Box id="8">
        <Image maw={240} mx="auto" radius="md" src={image} alt="Product 8" />
        <Text>product description</Text>
        <Button>Buy Now</Button>
      </Box>
    </SimpleGrid>
  );
};

export default Home;
