import {
  Text,
  Flex,
  Image,
  Menu,
  MenuButton,
  Link,
  Box,
  MenuList,
  MenuItem,
  Button,
  ReachLink,
} from "@chakra-ui/react";
import { MenuBtn } from "./Header.styles";
import Logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <Box
      position="fixed"
      top="0"
      h="74px"
      w="100%"
      p="20px 0"
      bg="#fff"
      zIndex="10"
    >
      <Box w="1160px" alignItems="center" m="0 auto">
        <Flex>
          <Flex mr="100px" as={Link} to="/">
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
          <Menu as={Link} to="/solution">
            <MenuBtn p="0 30px">科创教育解决方案</MenuBtn>
          </Menu>
          <Menu>
            <MenuButton p="0 30px">新闻中心</MenuButton>
          </Menu>
          <Menu>
            <MenuButton p="0 30px">关于我们</MenuButton>
            <MenuList>
              <MenuItem>公司简介</MenuItem>
              <MenuItem>愿景与使命</MenuItem>
              <MenuItem>证书与资质</MenuItem>
              <MenuItem>人才招募-叶永浩</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuBtn
              p="0 30px"
              target="_blank"
              as={Link}
              href="https://jinshuju.net/f/D9YFHe"
            >
              联系我们
            </MenuBtn>
          </Menu>
          <Menu>
            <Button
              p="0 30px"
              colorScheme="blue"
              as={Link}
              target="_blank"
              href="https://shop259321701.taobao.com/?spm=a230r.7195193.1997079397.2.3f0b14778jz3dZ"
            >
              官方商城
            </Button>
          </Menu>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
