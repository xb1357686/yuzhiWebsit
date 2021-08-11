import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import groupingbg from "../../assets/groupingbg.png";
import grouping1 from "../../assets/grouping1.png";
import grouping2 from "../../assets/grouping2.png";
import grouping3 from "../../assets/grouping3.png";
import grouping4 from "../../assets/grouping4.png";
import grouping5 from "../../assets/grouping5.png";
import grouping6 from "../../assets/grouping6.png";
import grouping7 from "../../assets/grouping7.png";
import grouping8 from "../../assets/grouping8.png";

function Introduce() {
  return (
    <Box
      padding="80px 80px 60px"
      backgroundImage={groupingbg}
      w="1160px"
      m="0 auto"
    >
      <Box d="flex">
        <Box w="25%" p={5}>
          <Image src={grouping1} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            1.学生的个人特点进行分组，团队一般由队长、设计师、工程师、艺术家、演讲家组成。队长负责团结整个团队做好统筹工作，督促项目进度。在队长的带领下小组成员各司其职完成创意作品从想到做再到分享的完整过程，培养学生的团队合作能力。
          </Box>
        </Box>
        <Box w="25%" p={5}>
          <Image src={grouping2} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            2.生活实际，解决生活中的痛点难点，寻找具有现实意义的项目主题，引导学生发现生活中的问题，思考问题并寻找解决问题的方法，培养学生的观察能力，发现问题解决问题的能力。
          </Box>
        </Box>
        <Box w="25%" p={5}>
          <Image src={grouping3} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            3.联系实际，并借助于开源电子和其他造物工具及材料，以项目学习的方式展开一场关于解决问题的头脑风暴，每组至少提供5个创意，填写在创意文稿中，限定30分钟。
          </Box>
        </Box>
        <Box w="25%" p={5}>
          <Image src={grouping4} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            4.根据头脑风暴产生的创意，小组讨论选择最合适的项目，确定最终要实现的创意，进行详细的组内分工，工作分配包括材料领取、硬件连接、编写测试程序、作品制作、记录工程日志等等。
          </Box>
        </Box>
      </Box>
      <Box d="flex">
        <Box w="25%" p={5}>
          <Image src={grouping5} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            5.根据创意文稿开始设计作品，填写作品文稿。根据作品文稿领取制作作品所需材料，再分工制作，制作过程中，严格遵守创客空间安全管理条例，规范使用加工工具，合理利用材料。
          </Box>
        </Box>
        <Box w="25%" p={5}>
          <Image src={grouping6} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            6.作品完成后，小组成员集体分享展示团队作品，包括创意来源、创新点、效果展示等。分享形式多种多样，例如“产品发布会”、小品、情景剧等等。
          </Box>
        </Box>
        <Box w="25%" p={5}>
          <Image src={grouping7} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            7.作品分享结束后采用生生互评和师生互评相结合的方式，对各小组作品进行评价，包括作品的创意性、娱乐性、功能实用性、产品价值以、展示演讲、以及作品制作过程中的团队协作等方面，评选出最佳创意奖、最佳作品奖、最佳团队奖等。
          </Box>
        </Box>
        <Box w="25%" p={5}>
          <Image src={grouping8} />
          <Box fontSize="14px" paddingTop="5px" color="#fff">
            8.四年来，一共来自22所中学的180+期1万余名学生在福田区劳动技术教育中心青少年创客空间完成了造物活动，共计做出了近2000+创客作品。每学期末盛思将对本学期的课程进行总结，整理学生的作品及教学成果，总结教学经验。
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Introduce;
