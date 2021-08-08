import {
  Menu,
  MenuButton,
  Image,
  GridItem,
  Button,
  Grid,
  Box,
  Link,
} from "@chakra-ui/react";
import banner from "../../assets/banner.jpg";

function Banner() {
  return (
    <Box w="100%" bg="#666" color="#fff" mt="74px">
      <Image src={banner} />
      <Box
        w="1160px"
        h="74px"
        p="20px 0"
        alignItems="center"
        m="0 auto"
        textAlign="center"
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={1} h="10" lineHeight="40px">
            小学教育解决方案
          </GridItem>
          <GridItem colSpan={3} h="10" lineHeight="40px">
            <Menu>
              <MenuButton p="0 10px">人工智能与编程教育</MenuButton>
              <MenuButton p="0 10px">机器人教育</MenuButton>
              <MenuButton p="0 10px">创客教育</MenuButton>
              <MenuButton p="0 10px">科技劳动教育</MenuButton>
              <MenuButton p="0 10px">综合实践活动</MenuButton>
            </Menu>
          </GridItem>
          <GridItem colSpan={1} h="10">
            <Button
              colorScheme="blue"
              as={Link}
              target="_blank"
              href="https://jinshuju.net/f/D9YFHe"
            >
              联系我们
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Banner;
