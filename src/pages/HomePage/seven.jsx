import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";


function seven() {


    return (
        <Box>


            <Box d="flex">
                <Box w="33.3%" p={2}  >
                    <Box w="100%" p={2} bgColor="#00bbff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                    </Box>
                </Box>
                <Box w="33.3%" p={2}  >
                    <Box w="100%" p={2} bgColor="#00bbff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                    </Box>
                </Box>
                <Box w="33.3%" p={2}  >
                    <Box w="100%" p={2} bgColor="#00bbff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                    </Box>
                </Box>
            </Box>



            <Box m="10px 0 0 0" d="flex">
                <Box w="100%" p={2}  >
                    <Box w="100%" p={2} bgColor="#00bbff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                    </Box>
                </Box>
            </Box>



        </Box>
    );
}

export default seven;
