import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import sys from "../../assets/sys.jpg";
import md from "../../assets/md.png";
import Swiper3 from "./swiper3";
function Introduce() {
  return (
    <Box paddingTop="70px">
      <Swiper3></Swiper3>
     
      <Box  w="1160px" m="0 auto">
        <Box textAlign="center" padding="80px 0 50px" fontSize="36px" fontWeight="400" colo="#333" >科技创新实验室整体解决方案</Box>
        <Image src={sys} />
        <Box textAlign="center" padding="80px 0 50px" fontSize="36px" fontWeight="400" colo="#333" >合作案例—具体名单</Box>
        <Image src={md} />

      </Box>
      
    </Box>
  );
}
export default Introduce;
