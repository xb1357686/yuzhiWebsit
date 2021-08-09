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


function Home() {
  return <Box>
    <Introduce></Introduce>
    <CurriculumSystem></CurriculumSystem>
    <CurriculumImg></CurriculumImg>
  </Box>;
}

export default Home;
