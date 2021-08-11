import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import banner1 from "../../assets/banner1.jpg";
import xz from "../../assets/xz.png";
import Swiper1 from "./swiper1";

function Introduce() {
  return (
    <Box padding="80px" w="1160px" m="0 auto">
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
          案例展示(福田劳动技术教育中心）
        </Box>
      </Box>

      <Box d="flex">
        <Box w="50%" p={2}>
          <Image src={xz} />
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

            <Box d="flex">
              <Box w="50%" p={2} overflow="hidden">
                <Swiper1></Swiper1>
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
                    深圳市福田劳动技术教育中心是区教育局管辖下的一所专为全区各所中学
                    的学生进行劳动技术教育的基地。中心成立于1997年初，现已发展成为一所管理严格，设备优良，课程门类比较齐全，教学思想端正的中学劳动技术教育基地。
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
                    建设完整的课程系统，包含课程方案、
                    教学计划、教学设计、教案教材及配套教学课件、教学工具、评价方案、教学耗材(课程活动相对应的材料套装)等，内容针对性强，能激发学生的创新思维，操作实践部分所占总课程的70%以上，同时每期课程每组学生具有能完成1~2件有创意并实用的创客作品的能力。
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
                    学生:全区初一、初二年级学生
                  </Box>
                  <Box fontSize="16px" lineHeight="25px" color="#666666">
                    课时:两天半
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
              建设完整的课程系统，包含课程方案、
              教学计划、教学设计、教案教材及配套教学课件、教学工具、评价方案、教学耗材(课程活动相对应的材料套装)等，内容针对性强，能激发学生的创新思维，操作实践部分所占总课程的70%以上，同时每期课程每组学生具有能完成1~2件有创意并实用的创客作品的能力。
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
              学生:全区初一、初二年级学生
            </Box>
            <Box fontSize="16px" lineHeight="25px" color="#666666">
              课时:两天半
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Introduce;
