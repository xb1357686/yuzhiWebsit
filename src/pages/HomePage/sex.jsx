import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";


function sex() {


    return (
        <Box>
            <Box m="10px 0 0 0" d="flex" color="#333333">
                <Box w="33.3%" p={4}  >
                    <Box w="100%" p={4} bgColor="#ffffff" borderRadius="10px" textAlign="center" >
                        <Image src={banner1} />
                        <Text p={5} fontSize="22px">创客马拉松</Text>
                    </Box>
                </Box>
                <Box w="33.3%" p={4}  >
                    <Box w="100%" p={4} bgColor="#ffffff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                        <Text p={5} fontSize="22px">机器人挑战赛</Text>
                    </Box>
                </Box>
                <Box w="33.3%" p={4}  >
                    <Box w="100%" p={4} bgColor="#ffffff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                        <Text p={5} fontSize="22px">校园科技节</Text>
                    </Box>
                </Box>
            </Box>


        
        </Box>
    );
}

export default sex;
