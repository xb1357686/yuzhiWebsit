import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";
import xz from "../../assets/xz.png";
import Swiper2 from "./swiper2";

function Introduce() {
  return (
    <Box padding="80px" w="1160px" m="0 auto">
      <Box padding="80px">
        <Box
          fontSize="36px"
          fontWeight="400"
          lineHeight="61px"
          color="#333333"
          textAlign="center"
          position="relative"
        >
          课程服务
        </Box>
        <Box
          width="36px"
          height="6px"
          background=" #E61E32"
          borderRadius="20px"
          margin="5px auto 20px"
        ></Box>
        <Box paddingBottom="15px">
          <Box
            display="inline-block"
            width="6px"
            height="38px"
            background="#E61E32"
            borderRadius="10px"
          ></Box>
          <Box
            display="inline-block"
            height="38px"
            lineHeight="38px"
            marginLeft="10px"
            fontSize="26px"
            verticalAlign="top"
          >
            案例展示(前海学校）
          </Box>
        </Box>

        <Box d="flex">
          <Box w="50%" p={2}>
            <Swiper2></Swiper2>
          </Box>
          <Box w="50%" p={2}>
            <Box w="90%">
              <Box paddingBottom="10px">
                <Box
                  display="inline-block"
                  height="30px"
                  lineHeight="30px"
                  fontSize="20px"
                >
                  学校简介:
                </Box>
              </Box>
              <Box fontSize="16px" lineHeight="25px" color="#666666">
                前海学校是一所集小学、初中于一体的九年一贯制、现代化、特色公立学
                校。学校占地面积37412平方米，建筑面积20963平方米，位于南山区前海湾之滨，临海听风，置身高尚社区，自然与人文环境优越，是一方理想的读书圣地。
              </Box>
              <Box paddingTop="10px" paddingBottom="10px">
                <Box
                  display="inline-block"
                  height="30px"
                  lineHeight="30px"
                  fontSize="20px"
                >
                  课程目标:
                </Box>
              </Box>
              <Box fontSize="16px" lineHeight="25px" color="#666666">
                前海学校创客教育课程主要是让学生了解创客相关的软件和智能硬件的应用，以及创客工具的使用，训练学生的逻辑思维能力与创新意识，能通过合作或独自完成创意作品，培养学生的分享精神及能力。
              </Box>
              <Box paddingTop="10px" paddingBottom="10px">
                <Box
                  display="inline-block"
                  height="30px"
                  lineHeight="30px"
                  fontSize="20px"
                >
                  课程形式:
                </Box>
              </Box>
              <Box fontSize="16px" lineHeight="25px" color="#666666">
                学生:五、六年级全体学生
              </Box>
              <Box fontSize="16px" lineHeight="25px" color="#666666">
                课时:每周两课时
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingTop="10px" paddingBottom="10px">
          <Box
            display="inline-block"
            height="30px"
            lineHeight="30px"
            fontSize="20px"
          >
            课程目标:
          </Box>
        </Box>
        <Box fontSize="16px" lineHeight="25px" color="#666666">
          前海学校创客教育课程主要是让学生了解创客相关的软件和智能硬件的应用，以及创客工具的使用，训练学生的逻辑思维能力与创新意识，能通过合作或独自完成创意作品，培养学生的分享精神及能力。
        </Box>
        <Box paddingTop="10px" paddingBottom="10px">
          <Box
            display="inline-block"
            height="30px"
            lineHeight="30px"
            fontSize="20px"
          >
            课程形式:
          </Box>
        </Box>
        <Box fontSize="16px" lineHeight="25px" color="#666666">
          学生:五、六年级全体学生
        </Box>
        <Box fontSize="16px" lineHeight="25px" color="#666666">
          课时:每周两课时
        </Box>
      </Box>
    </Box>
  );
}
export default Introduce;
