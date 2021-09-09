import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";

function Introduce() {
  return (
    <Box padding="40px 80px 60px" bg="#F8F8F8" w="1160px" m="0 auto">
      <Box textAlign="center" paddingBottom="30px">
        <Box
          width="8px"
          height="8px"
          borderRadius="10px"
          bg="#E61E32"
          display="inline-block"
        ></Box>
        <Box
          fontSize="20px"
          color="#333"
          display="inline-block"
          marginLeft="5px"
          verticalAlign="middle"
        >
          案例教学过程
        </Box>
      </Box>
      <Box d="flex">
        <Box w="25%" p={6}>
          <Box bg="#fff" boxShadow="0px 4px 8px #ccc" borderRadius="5px">
            <Image src={book1} width="100%"></Image>
          </Box>
        </Box>
        <Box w="25%" p={6}>
          <Box bg="#fff" boxShadow="0px 4px 8px #ccc" borderRadius="5px">
            <Image src={book2} width="100%"></Image>
          </Box>
        </Box>
        <Box w="25%" p={6}>
          <Box bg="#fff" boxShadow="0px 4px 8px #ccc" borderRadius="5px">
            <Image src={book3} width="100%"></Image>
          </Box>
        </Box>
        <Box w="25%" p={6}>
          <Box bg="#fff" boxShadow="0px 4px 8px #ccc" borderRadius="5px">
            <Image src={book4} width="100%"></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Introduce;
