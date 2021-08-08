import {
  Text,
  Flex,
  Image,
  Menu,
  MenuButton,
  Button,
  Box,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <Box position="fixed" top="0" h="74px" w="100%" p="20px 0" bg="#fff" zIndex="10">
      <Box w="1160px" alignItems="center" m="0 auto">
        <Flex>
          <Flex mr="100px">
            <Image boxSize="30px" src={Logo} alt="logo" mr="10px" />
            <Text fontSize="lg" fontWeight="bold" color="#2ea3f2" pt="6px">
              育智科创
            </Text>
          </Flex>
          <Menu>
            <MenuButton p="0 30px">产品中心</MenuButton>
            <MenuList>
              <MenuItem>硬件产品</MenuItem>
              <MenuItem>软件产品</MenuItem>
              <MenuItem>课程体系</MenuItem>
              <MenuItem>数智化创新领袖</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton p="0 30px">科创教育解决方案</MenuButton>
            <MenuButton p="0 30px">新闻中心</MenuButton>
            <MenuButton p="0 30px">关于我们</MenuButton>
            <MenuButton p="0 30px">联系我们</MenuButton>
            <MenuButton p="0 30px" as={Button} colorScheme="blue">
              官方商城
            </MenuButton>
          </Menu>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
