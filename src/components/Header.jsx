import { Text, Center, Box } from "@mantine/core";
import "./header.css";

const Header = () => {
  return (
    <Box className="header">
      <Center maw={400} h={100} mx="auto">
        <Text className="header-text">My Store Products</Text>
      </Center>
    </Box>
  );
};

export default Header;
