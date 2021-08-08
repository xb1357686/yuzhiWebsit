import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";


function eight() {



    const divStyle = {
        position:'absolute',
        width:'100%',
        height:'60px',
        lineHeight:'60px',
        left:0,
        bottom:0,
        background:'#00bbff',
        borderRadius:'10ox',
        fontSize: '22px',
        borderRadius:" 0 0 10px 10px",
      };

    return (
        <Box paddingBottom="50px">


            <Box d="flex">
                <Box w="50%" p={2} >
                    <Box w="100%" p={2} bgColor="#00bbff" borderRadius="10px" textAlign="center" position="relative">
                        <Image src={banner1} height="300px"/>
                        <Box  style={divStyle}>
                            济南高新区东城逸家小学
                        </Box>
                    </Box>
                </Box>
                <Box w="50%" p={2}  >
                    <Box w="100%" p={2} bgColor="#00bbff" borderRadius="10px" textAlign="center"  position="relative">
                        <Image src={banner1} height="300px"/>
                        <Box  style={divStyle}>
                        东北师范大学北湖明达实验学校
                        </Box>
                    </Box>
                </Box>
            </Box>




        </Box>
    );
}
export default eight;
