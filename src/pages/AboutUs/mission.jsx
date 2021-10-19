import {
  Image,
  Box,
  Text,
  Button,
  Link,
  Heading,
  Flex,
} from "@chakra-ui/react";
import code1 from "../../assets/code1.jpg";
import code2 from "../../assets/code2.jpg";
import code3 from "../../assets/code3.jpg";
import mission1 from "../../assets/mission1.jpg";
// import mission5 from "../../assets/mission5.jpg";
// import mission6 from "../../assets/mission6.jpg";
// import mission7 from "../../assets/mission7.jpg";

function CompanyProfile() {
  return (
    <Box bg="#f9f9f9">
      <Box w="1160px" m="0 auto">
        <Box>
          <Image src={mission1} width="100%"></Image>
        </Box>
        <Heading as="h1" textAlign="center" p="20px 0">
          联系我们
        </Heading>
        <Flex textAlign="center" justifyContent="center">
          <Box p="10px 20px">
            <Image src={code3} width="126px" height="126px"></Image>
            <Text>叶永浩 微信号</Text>
          </Box>
          <Box p="10px 20px">
            <Image src={code2} width="126px" height="126px"></Image>
            <Text>叶永浩 视频号</Text>
          </Box>
          <Box p="10px 20px">
            <Image src={code1} width="126px" height="126px"></Image>
            <Text>育智科创 公众号</Text>
          </Box>
        </Flex>

        {/* <Box paddingTop="20px" d="flex">
          <Box w="50%" p={3}>
            <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
              <Box>
                <Image src={mission2} width="100%"></Image>
              </Box>
              <Box padding="30px 50px 0" height="300px">
                <Box fontSize="22px" color="#666666" paddingBottom="10px">
                  什么是 STEAM 教育？
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  STEAM
                  教育是一种全新的教育理念，它正成为全球教育趋势。与传统的单学科教育不同，STEAM
                  融合了科学、技术、工程、艺术、数学跨学科的知识，鼓励孩子通过探索，以项目的形式尝试完成他们感兴趣且与生活相关的问题，并从中找到解决问题的方法，全面锻炼逻辑思维、创新能力和团队合作等能力。
                </Box>
                <Box
                  paddingTop="10px"
                  fontSize="12px"
                  color="#9b9b9b"
                  lineHeight="24px"
                >
                  STEAM：即 S-科学 (Science)、T-技术 (Technology)、E-工程
                  (Engineering)、A-艺术 (Arts)和 M-数学 (Mathematics)
                </Box>
              </Box>
            </Box>
          </Box>
          <Box w="50%" p={3}>
            <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
              <Box>
                <Image src={mission3} width="100%"></Image>
              </Box>
              <Box padding="30px 50px 0" height="300px">
                <Box fontSize="22px" color="#666666" paddingBottom="10px">
                  童心制物的 STEAM 教育理念
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  童心制物将科技和教育融合在一起，通过建立涵盖机械、电子、软件的
                  STEAM
                  基础设施平台，全面降低创造的门槛。我们相信，在孩子的基础教育阶段，知识的广度比深度更重要，能力的培养比知识的传授更重要。童心制物以软硬件结合的方式，帮助孩子在做中学，兼顾动手实践和思维训练，让孩子不惧未来的任何挑战，成长为有能力、会思考、有社会责任感的世界公民。
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingTop="20px" d="flex">
          <Box w="50%" p={3}>
            <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
              <Box>
                <Image src={mission4} width="100%"></Image>
              </Box>
              <Box padding="30px 50px 0" height="300px">
                <Box fontSize="22px" color="#666666" paddingBottom="10px">
                  硬件
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  丰富的硬件产品线，包括高创作自由度的 DIY 平台、金属机器人套件
                  mBot 系列、Airblock
                  飞行机器人、神经元智能电子积木平台、普及型编程机器人程小奔、无线联网单板计算机光环板、多形态仿生运动机器人灵跃模组、桌面级智能激光切割机激光宝盒及思维启蒙机器人童小点。
                  面向家庭教育场景，
                  我们推出订阅式家庭编程学习套装童心制物编程造物盒。从丰富的零件到多元化的
                  STEAM
                  教育套件、创客工具，童心制物为用户提供完备流畅的产品体验，产品更屡获国际设计大奖，积累了良好的口碑。
                </Box>
              </Box>
            </Box>
          </Box>
          <Box w="50%" p={3}>
            <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
              <Box>
                <Image src={mission5} width="100%"></Image>
              </Box>
              <Box padding="30px 50px 0" height="300px">
                <Box fontSize="22px" color="#666666" paddingBottom="10px">
                  软件
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  强大易用的 STEAM
                  教育软件，包括：童心制物自主研发的图形化编程与软件慧编程
                  mBlock 5；零编程基础也能快速上手的机器人产品操控软件 Makeblock
                  App；以连线式编程的方式让电子发明变得简单的神经元 App。
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  我们的软件以入门门槛低、有趣易用的特点，吸引了全球超过1500万人使用，且用户量仍在持续增长。
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box paddingTop="20px" d="flex">
          <Box w="50%" p={3}>
            <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
              <Box>
                <Image src={mission6} width="100%"></Image>
              </Box>
              <Box padding="30px 50px 0" height="300px">
                <Box fontSize="22px" color="#666666" paddingBottom="10px">
                  内容
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  我们为使用童心制物（Makeblock）产品的用户提供个人学习、教育及娱乐支持。我们输出多版本多语言的教材、视频教学资料和各种新奇好玩的案例，帮助用户玩转产品的同时，激发更多创造灵感。
                </Box>
              </Box>
            </Box>
          </Box>
          <Box w="50%" p={3}>
            <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
              <Box>
                <Image src={mission5} width="100%"></Image>
              </Box>
              <Box padding="30px 50px 0" height="300px">
                <Box fontSize="22px" color="#666666" paddingBottom="10px">
                  赛事
                </Box>
                <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                  MakeX
                  是一个引导青少年全方位成长的机器人赛事平台，旨在通过机器人挑战赛、STEAM
                  嘉年华等活动形式，引导青少年系统学习科学（S）、技术（T）、工程（E）、艺术（A）和数学（M），激发青少年对于创造的热爱，让大众更加深刻认识
                  STEAM 教育的价值。
                </Box>
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
}
export default CompanyProfile;
