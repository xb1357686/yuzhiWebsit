import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";


function fore() {


    return (
        <Box>
            <Box m="10px 0 0 0" d="flex" color="#333333">
                <Box w="50%" p={4}  >
                    <Box w="100%" p={4} bgColor="#ffffff" borderRadius="10px" textAlign="center" >
                        <Image src={banner1} />
                        <Text p={5} fontSize="22px">创客空间套装</Text>
                        <Text p="0 30px" m="0 0 10px 0" fontSize="16px" height="50px">包含300多种机械和电子零件，零件总数超过1700个，为学校的创客教育提供强大的器材支持。</Text>

                        <Link href="https://chakra-ui.com" >
                            <Button colorScheme="teal" variant="outline" p={20, 5} >
                                了解更多
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box w="50%" p={4}  >
                    <Box w="100%" p={4} bgColor="#ffffff" borderRadius="10px" textAlign="center">
                        <Image src={banner1} />
                        <Text p={5} fontSize="22px">激光宝盒</Text>
                        <Text p="0 30px" m="0 0 10px 0" fontSize="16px" height="50px">桌面级智能激光切割机。</Text>
                        <Link href="https://chakra-ui.com" >
                            <Button colorScheme="teal" variant="outline" p={20, 5} >
                                了解更多
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>


        
        </Box>
    );
}

export default fore;
