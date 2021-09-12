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
  return <Box padding="0px">

    {/* 改版首页20210912 */}
    <SchoolCase></SchoolCase>  


  </Box>;
}

export default Home;
