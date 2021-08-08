import { Image, Box, Text, Button, Link, Heading } from "@chakra-ui/react";
import Content from "../Content/Content";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner5 from "../../assets/banner5.png";
import banner6 from "../../assets/banner6.jpg";
import banner7 from "../../assets/banner7.png";
import banner8 from "../../assets/banner8.png";
import gb from "../../assets/gb.jpg";
import One from "./one";
import Two from "./two";
import Three from "./Three";
import Fore from "./fore";
import Five from "./five";
import Sex from "./sex";
import Seven from "./seven";
import Eight from "./eight";

function HomePage() {
  return (
    <Box>
      <Box m="75px 0">
        <Image src={banner1} />
      </Box>
      <Content title="人工智能与编程教育" bgUrl={banner2}>
        <Text>
          早在2017年，国务院已出台《新一代人工智能发展规划》，要求在中小学阶段设置人工智能相关课程，逐步推广编程教育。人工智能与编程俨然成为21世纪中小学生的关键技能。
        </Text>
        <Text>
          童心制物为学校开展人工智能与编程教育提供完整的软硬件服务与支持，我们将虚拟世界的编程通过现实世界中的程小奔、神经元等产品呈现出来，为学生打开好奇求知的大门，让其体验人工智能与编程的无穷魅力。
        </Text>
        <One />
      </Content>

      <Content title="机器人教育" bgUrl={banner5}>
        <Text>
          机器人教育是指通过设计、组装、编程、运行机器人，激发学生学习兴趣、培养学生综合能力。
        </Text>
        <Text>
          育智机器人教育依托机器人赛事，通过国际化的机器人挑战赛、STEAM
          嘉年华等活动形式，为学生提供与全球青少年同台竞技的机会，为中小学生综合能力、信息素养的提升提供平台。
        </Text>
        <Two />
      </Content>

      <Content title="创客教育" bgUrl={banner6}>
        <Text>
          创客教育是一种创造性的学习模式，被世界各国列为未来核心竞争力发展的重要战略。
        </Text>
        <Text>
          育智科创的创客教育解决方案，以解决现实生活中的问题为出发点，通过
          PBL项目式学习理念，让学生灵活使用各种器材、工具和软件来进行造物，并在此过程中培养学生的自主学习能力、动手能力、协作能力、逻辑思维和创造力。
        </Text>
        <Three />
      </Content>

      <Content title="科技劳动教育" bgUrl={gb}>
        <Text>
          2020年，国务院已出台《中共中央
          国务院关于全面加强新时代大中小学劳动教育的意见》，要求把劳动教育纳入人才培养全过程，整体优化学校课程设置，将劳动教育纳入中小学国家课程方案，形成具有综合性、实践性、开放性、针对性的劳动教育课程体系。
        </Text>
        <Text>
          育智科创以习近平总书记关于新时代劳动和劳动教育的重要论述精神为指导，以学科融合创新为导向，把劳动和科技教育纳入人才培养全过程，通过提供软硬件整体解决方案，为中小学生提供“兴趣发现、智能培养、探究学习、创新行动、创造发明”的劳动实践创新的途径，。
        </Text>
        <Fore />
      </Content>

      <Content title="综合实践活动" bgUrl={banner7}>
        <Text>
          早在2017年，教育部关于印发《中小学综合实践活动课程指导纲要》的通知和《义务教育综合实践活动教学装备配置标准》，要求各地要充分认识综合实践活动课程的重要意义，确保综合实践活动课程全面开设到位，坚持教育与生产劳动、社会实践相结合，引导学生深入理解和践行社会主义核心价值观，充分发挥中小学综合实践活动课程在立德树人中的重要作用。
        </Text>
        <Text>
          育智科创的综合实践活动解决方案，从学生的真实生活和发展需要出发，从生活情境中发现问题，转化为活动主题，通过探究、服务、制作、体验等方式，培养学生综合素质的跨学科实践性课程。
        </Text>
        <Five />
      </Content>

      <Content title="活动运营" bgUrl={gb}>
        <Text>
          育智科创为学校提供丰富的活动运营方案，不仅有针对科技创新教育的启蒙和认知活动，
          还有针对科技创新思维提升的创新文化推广活动。方案以创意物化为目标，全面
          锻炼学生的综合实践能力、激发学生的学习兴趣。创客马拉松、人工智能项目等
          一系列活动，不但帮助学校提升创新创造的氛围，还能形成教学品牌效{" "}
        </Text>
        <Sex />
      </Content>

      <Box>
        <Box w="1160px" p="20px 0" alignItems="center" m="0 auto" color="#333">
          <Heading as="h2" textAlign="center">
            空间设计
          </Heading>
          <Box
            alignItems="center"
            bg="#00bbff"
            w="171px"
            h="5px"
            m="50px auto"
          />
          <Text>
            创新开放的教室环境可以激发学生大脑能力，促进学生思考，突破限制。合理的空间设计还可以为学生提供强烈的归属感、乐观感、创造感，带来更舒适的创造体验。因此在空间布置、装修设计、基础设施的建设上，我们充分考虑教学场景中老师和学生的需求，为每一座学校打造适合自己学校特色的创新实验室。
          </Text>
          <Seven></Seven>
        </Box>
      </Box>

      <Content title="合作案例" bgUrl={banner8}>
        <Eight />
      </Content>
    </Box>
  );
}

export default HomePage;
