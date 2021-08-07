import { Image, Box, Text } from "@chakra-ui/react";
import Banner from "../Banner/Banner";
import Content from "../Content/Content";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

function HomePage() {
  return (
    <Box>
      <Banner />
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
      </Content>
    </Box>
  );
}

export default HomePage;
