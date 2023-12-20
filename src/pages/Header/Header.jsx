import {
  Text,
  Flex,
  Image,
  Menu,
  MenuButton,
  Box,
  MenuList,
  MenuItem,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useLocation, Route, Switch, useHistory } from "react-router-dom";
import { MenuBtn } from "./Header.styles";
import Logo from "../../assets/logo.jpg";

function Header() {
  const history = useHistory();
  return (
    <Box
      position="fixed"
      top="0"
      h="74px"
      w="100%"
      p="20px 0"
      bg="#fff"
      zIndex="10"
      borderBottom="1px solid #ebebeb"
    >
      <Box w="1160px" alignItems="center" m="0 auto">
        <Flex>
          <Flex
            mr="80px"
            cursor="pointer"
            onClick={() => history.push(window.ENV.URLPATHNAME)}
          >
            {/* <Image w="155px" src={Logo} alt="logo" mr="10px" /> */}
            <Flex>
              <Heading as="h1" hover fontSize="26px" color="#3bbbff" pt="4px">
                育智科创
              </Heading>
              <Text fontSize="26px" color="#3bbbff" ml="12px">
                UZ Creative
              </Text>
            </Flex>
          </Flex>
          <Menu>
            <MenuButton
              p="0 30px"
              onClick={() => history.push(`${window.ENV.URLPATHNAME}`)}
            >
              产品中心
            </MenuButton>
            {/* <MenuList>
              <MenuItem
                onClick={() => history.push(`${window.ENV.URLPATHNAME}cyberpi`)}
              >
                硬件产品
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push(`${window.ENV.URLPATHNAME}software`)
                }
              >
                软件产品
              </MenuItem>
              <MenuItem
                onClick={() => history.push(`${window.ENV.URLPATHNAME}course`)}
              >
                课程体系
              </MenuItem>
            </MenuList> */}
          </Menu>
          <Menu as={Link}>
            <MenuBtn
              onClick={() => history.push(`${window.ENV.URLPATHNAME}solution`)}
              p="0 30px"
            >
              教育服务
            </MenuBtn>
          </Menu>
          <Menu>
            <MenuButton
              p="0 30px"
              onClick={() => history.push(`${window.ENV.URLPATHNAME}newsList`)}
            >
              育智资讯
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              p="0 30px"
              onClick={() => history.push(`${window.ENV.URLPATHNAME}aboutUs`)}
            >
              关于我们
            </MenuButton>
          </Menu>
          <Menu>
            <MenuBtn
              p="0 30px"
              target="_blank"
              as={Link}
              // href="https://jinshuju.net/f/D9YFHe"
              onClick={() =>
                history.push(`${window.ENV.URLPATHNAME}cooperation`)
              }
            >
              教育合作
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
