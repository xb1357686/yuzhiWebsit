import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";
import xz from "../../assets/xz.png";


function Introduce() {


    return (
        <Box padding="80px">


            <Box d="flex">
                <Box w="65%" p={2} >
                    <Box w="90%">
                        <Box paddingBottom="15px">
                            <Box display="inline-block" width="6px" height="38px" background="#E61E32" borderRadius="10px"></Box>
                            <Box display="inline-block" height="38px" lineHeight="38px" marginLeft="10px" fontSize="26px"
                                verticalAlign="top"
                            >课程</Box>
                        </Box>
                        <Box fontSize="18px" fontWeight="400" lineHeight="27px" color="#666666">Labplus盛思致力于校园创客空间建设，以推行并实践STEAM创客教育为己任，
                            同步开发了盛思创客教育课程体系及网上平台，打造校园创客空间一站式服务，
                            为创客教育进入学校、走进课堂保驾护航。
                        </Box>
                        <Box paddingTop="30px"  paddingBottom="15px">
                            <Box display="inline-block" width="6px" height="38px" background="#E61E32" borderRadius="10px"></Box>
                            <Box display="inline-block" height="38px" lineHeight="38px" marginLeft="10px" fontSize="26px"
                                verticalAlign="top"
                            >实施路径</Box>
                        </Box>
                        <Box fontSize="18px" fontWeight="400" lineHeight="27px" color="#666666">
                            STEAM教育是创客教育的理论支撑，创客教育是STEAM教育的实施载体，简而言之，创客教育就是以STEAM跨学科的方式进行造物。
                        </Box>
                    </Box>
                </Box>
                <Box w="35%" p={2}  >
                    <Image src={xz} />
                </Box>
            </Box>




        </Box>
    );
}
export default Introduce;
