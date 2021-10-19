import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import sys from "../../assets/sys1.jpg";
import md from "../../assets/md.jpg";
import Swiper3 from "./swiper3";
function Introduce() {
  return (
    <Box paddingTop="70px">
      <Swiper3></Swiper3>

      <Box w="1160px" m="0 auto">
        <Box
          textAlign="center"
          padding="80px 0 50px"
          fontSize="36px"
          fontWeight="400"
          colo="#333"
        >
          科技创新实验室整体解决方案
        </Box>
        <Box
          position="relative"
          fontSize="36px"
          fontWeight="bold"
          color="#de4d4c"
        >
          <Image src={sys} />
          <Box position="absolute" left="20px" top="160px">
            <Text m="40px 10px">软件教学平台</Text>
            <Text m="40px 10px">硬件教学套件</Text>
            <Text m="40px 10px">课程教学资源</Text>
          </Box>
          <Box position="absolute" right="20px" top="160px">
            <Text m="40px 10px">课室选配设备</Text>
            <Text m="40px 10px">课室建设服务</Text>
            <Text m="40px 10px">课室运营服务</Text>
          </Box>
        </Box>
        <Box
          textAlign="center"
          padding="80px 0 50px"
          fontSize="36px"
          fontWeight="400"
          colo="#333"
        >
          合作案例
        </Box>
        <Image src={md} />
      </Box>
    </Box>
  );
}
export default Introduce;
