import {
  Text,
  Flex,
  Image,
  Menu,
  MenuButton,
  Button,
  Link,
  Box,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Introduce from "./Introduce";
import CurriculumSystem from "./CurriculumSystem";
import CurriculumImg from "./CurriculumImg";
import CourseService from "./CourseService";
import CaseTeaching from "./CaseTeaching";
import SchoolCase from "./SchoolCase";
import Grouping from "./Grouping";
import OnlinePlatform from "./OnlinePlatform";

function Home() {
  return (
    <Box>
      <Introduce></Introduce>
      <CurriculumSystem></CurriculumSystem>
      <CurriculumImg></CurriculumImg>
      {/* 课程服务 */}
      <CourseService></CourseService>
      {/* 案例教学过程 Case teaching*/}
      <CaseTeaching></CaseTeaching>
      {/* 案例展示(福田劳动技术教育中心） School case */}
      <SchoolCase></SchoolCase>
      {/* 红色背景 */}
      <Grouping></Grouping>
      {/* 线上平台 */}
      <OnlinePlatform></OnlinePlatform>
    </Box>
  );
}

export default Home;
