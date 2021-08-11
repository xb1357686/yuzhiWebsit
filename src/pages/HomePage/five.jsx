import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";

function five() {
  return (
    <Box>
      {/* <Box m="10px 0 0 0" d="flex">
          <Box w="50%" p={4}  >
            <Box w="100%" p={4} bgColor="#00bbff" borderRadius="10px" textAlign="center">
              <Image src={banner1} />
              <Text p={5} fontSize="22px">程小奔编程教育 - 六个装</Text>
              <Link href="https://chakra-ui.com" >
                <Button colorScheme="teal" variant="outline" p={20, 5} >
                  了解更多
                </Button>
              </Link>
            </Box>
          </Box>
          <Box w="50%" p={4}  >
            <Box w="100%" p={4} bgColor="#00bbff" borderRadius="10px" textAlign="center">
              <Image src={banner1} />
              <Text p={5} fontSize="22px">程小奔&神经元人工智能初级套装</Text>
              <Link href="https://chakra-ui.com" >
                <Button colorScheme="teal" variant="outline" p={20, 5} >
                  了解更多
                </Button>
              </Link>
            </Box>
          </Box>
        </Box> */}
      <Box d="flex">
        <Box w="50%" p={4}>
          <Box
            w="100%"
            p={4}
            bgColor="#00bbff"
            borderRadius="10px"
            textAlign="center"
          >
            <Image src={banner1} />
            <Text p={5} fontSize="22px">
              人工智能大班教学套装
            </Text>
            <Link href="https://chakra-ui.com">
              <Button colorScheme="teal" variant="outline" p={(20, 5)}>
                了解更多
              </Button>
            </Link>
          </Box>
        </Box>
        <Box w="50%" p={4}>
          <Box
            w="100%"
            p={4}
            bgColor="#00bbff"
            borderRadius="10px"
            textAlign="center"
          >
            <Image src={banner1} />
            <Text p={5} fontSize="22px">
              人工智能机器人教育套装
            </Text>
            <Link href="https://chakra-ui.com">
              <Button colorScheme="teal" variant="outline" p={(20, 5)}>
                了解更多
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default five;
