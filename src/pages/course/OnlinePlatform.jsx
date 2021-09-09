import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import platform from "../../assets/platform.png";
import platform1 from "../../assets/platform1.png";
import platform2 from "../../assets/platfor2.png";
import platform3 from "../../assets/platform3.png";
import platform4 from "../../assets/platform4.png";
import platform5 from "../../assets/platform5.png";
import Curriculum1 from "../../assets/Curriculum1.png";
import teaching1 from "../../assets/teaching1.png";
import teaching2 from "../../assets/teaching2.png";
import teaching3 from "../../assets/teaching3.png";
import Curriculum9 from "../../assets/Curriculum9.png";
import teaching4 from "../../assets/teaching4.png";
import teaching5 from "../../assets/teaching5.png";
import teaching6 from "../../assets/teaching6.png";
import teaching7 from "../../assets/teaching7.png";
import teaching8 from "../../assets/teaching8.png";

import xz from "../../assets/xz.png";

function Introduce() {
  return (
    <Box w="1160px" m="0 auto">
      <Box padding="80px">
        <Box
          fontSize="36px"
          fontWeight="400"
          lineHeight="61px"
          color="#333333"
          textAlign="center"
          position="relative"
        >
          线上平台
        </Box>
        <Box
          width="36px"
          height="6px"
          background=" #E61E32"
          borderRadius="20px"
          margin="5px auto 20px"
        ></Box>
        <Box>
          <Box w="80%" position="relative">
            <Image src={platform} width="100%" />
            <Box
              position="absolute"
              top="180px"
              right="-170px"
              background="#fff"
              padding=" 44px 34px"
              borderRadius="10px"
              width="307px"
              boxShadow="0px 3px 6px #ccc"
            >
              盛思·未来课堂是面向学校的线上教学及资源系统，集课程资源、在线教学及管理于一体，一站式解决学校的STEAM教育、创客教育和人工智能教育等课程需求。
            </Box>
          </Box>
        </Box>

        <Box d="flex" paddingTop="50px">
          <Box w="20%" p={4}>
            <Box textAlign="center">
              <Image src={platform1} display="inline-block" />
              <Box fontSize="20px" padding="15px">
                管
              </Box>
            </Box>
            <Box color="#666" fontSize="14px">
              以学校管理员身份进行监管，实现教师、班级、学生、作业全方位数字化，为学校科学化信息化管理提供支持。
            </Box>
          </Box>
          <Box w="20%" p={4}>
            <Box textAlign="center">
              <Image src={platform2} display="inline-block" />
              <Box fontSize="20px" padding="15px">
                教
              </Box>
            </Box>
            <Box color="#666" fontSize="14px">
              以学校管理员身份进行监管，实现教师、班级、学生、作业全方位数字化，为学校科学化信息化管理提供支持。
            </Box>
          </Box>
          <Box w="20%" p={4}>
            <Box textAlign="center">
              <Image src={platform3} display="inline-block" />
              <Box fontSize="20px" padding="15px">
                学
              </Box>
            </Box>
            <Box color="#666" fontSize="14px">
              以名师精品视频课程为主，配合老师课堂辅导，打破老师说教模式，课程趣味性强，贴合学生需求，作业离线完成、在线提交，回家还能继续创作，老师线上评析。
            </Box>
          </Box>
          <Box w="20%" p={4}>
            <Box textAlign="center">
              <Image src={platform4} display="inline-block" />
              <Box fontSize="20px" padding="15px">
                学
              </Box>
            </Box>
            <Box color="#666" fontSize="14px">
              即学即评，当场评估学生本堂课的学习效果，学生可查看在线练习的答案，自我订正，系统会按每堂课学生学习情况给出学期参考评价。
            </Box>
          </Box>
          <Box w="20%" p={4}>
            <Box textAlign="center">
              <Image src={platform5} display="inline-block" />
              <Box fontSize="20px" padding="15px">
                析
              </Box>
            </Box>
            <Box color="#666" fontSize="14px">
              系统自动积累学生的学习习惯和中间结果，生成大数据，再结合人工智能技术分析大数据，为学校提供全面、科学的教学统计分析和课程报告。
            </Box>
          </Box>
        </Box>

        <Box>
          <Box paddingTop="50px" textAlign="center">
            <Image
              src={Curriculum1}
              display="inline-block"
              marginRight="10px"
            />
            <Box display="inline-block" fontSize="18px" verticalAlign="bottom">
              为学校而生的编程教学与课程管理一体化平台
            </Box>
          </Box>
          <Box d="flex" paddingTop="30px">
            <Box w="33.3%" p={4}>
              <Image
                src={teaching1}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
            <Box w="33.3%" p={4}>
              <Image
                src={teaching2}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
            <Box w="33.3%" p={4}>
              <Image
                src={teaching3}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
          </Box>
          <Box padding="40px 190px" color="#666" textAlign="center">
            盛思未来教室提供高效、便捷、有趣的编程课堂解决方案，其友好的系统设计，方便老师快速开课，让学生边学边练，是老师的“贴身助教”，同时具备海量课程资源和自建课程的功能，方便老师在选课的同时，还能建设特色样本课程应用于教学中。
          </Box>
        </Box>
      </Box>

      <Box bg="#F8F8F8">
        <Box padding="60px 80px">
          <Box textAlign="center" paddingBottom="40px">
            <Image
              src={Curriculum9}
              display="inline-block"
              marginRight="10px"
            />
            <Box display="inline-block" fontSize="18px" verticalAlign="bottom">
              多模块组合 多角度教学
            </Box>
          </Box>
          <Box d="flex">
            <Box w="20%" p={4}>
              <Image
                src={teaching4}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
            <Box w="20%" p={4}>
              <Image
                src={teaching5}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
            <Box w="20%" p={4}>
              <Image
                src={teaching6}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
            <Box w="20%" p={4}>
              <Image
                src={teaching7}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
            <Box w="20%" p={4}>
              <Image
                src={teaching8}
                display="inline-block"
                marginRight="10px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Introduce;
