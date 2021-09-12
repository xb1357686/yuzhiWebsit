import {
  Text,
  Tabs,
  Image,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  Box,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
// import {} from './software.styles';
import Bg4 from "../../assets/bg-04.jpeg";
import Frame from "../../assets/bg-frame.png";
import Block from "../../assets/img-block-zh.jpeg";
import Python from "../../assets/img-python-zh.jpeg";
import Bg6 from "../../assets/bg-06.png";
import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";
import Icon4 from "../../assets/icon-4.png";
import Icon5 from "../../assets/icon-5.png";
const style = {
  color: "#000",
  bg: "white",
  boxShadow: "0px 24px 40px 0px rgb(153 177 190 / 20%)",
  borderRadius: "8px",
};

function Home() {
  return (
    <>
      <Box
        padding="80px"
        position="relative"
        bg={`url(${Bg4})`}
        textAlign="center"
        color="#fff"
        s
      >
        <Heading as="h2" fontSize="40px" mt="35px">
          专注软硬结合的国产双模式编程软件
        </Heading>
        <Text fontSize="16px" mt="4px">
          深受全球 1500 万老师和学生的信赖
        </Text>
        <Box width="994px" m="0 auto" mt="35px">
          <Tabs variant="unstyled" align="center">
            <TabList>
              <Tab
                borderRadius="5px"
                _selected={{ color: "#1795f4", bg: "white" }}
              >
                图形化编程模式
              </Tab>
              <Tab
                borderRadius="5px"
                _selected={{ color: "#1795f4", bg: "white" }}
              >
                Python编程模式
              </Tab>
            </TabList>
            <TabPanels
              bg={`url(${Frame}) no-repeat`}
              height="613px"
              p="20px"
              overflow="hidden"
              mt="30px"
            >
              <TabPanel>
                <Image fit="cover" src={Block} />
              </TabPanel>
              <TabPanel>
                <Image fit="cover" src={Python} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          position="absolute"
          bottom="0"
          width="100%"
          height="252px"
          left="0"
          bg={`url(${Bg6}) no-repeat`}
        ></Box>
      </Box>
      <Box width="820px" m="0 auto">
        <Box width="994px" m="0 auto" mt="35px">
          <Tabs variant="unstyled" align="center">
            <TabList color="#99b1be">
              <Tab _selected={style} display="block" p="10px" mr="10px">
                <Image boxSize="80px" m="0 auto" src={Icon1}></Image>
                <Text>图形化编程</Text>
              </Tab>
              <Tab _selected={style} display="block" mr="10px">
                <Image boxSize="80px" m="0 auto" src={Icon2}></Image>
                <Text>Python编程</Text>
              </Tab>
              <Tab _selected={style} display="block" mr="10px">
                <Image boxSize="80px" m="0 auto" src={Icon3}></Image>
                <Text>机器人编程</Text>
              </Tab>
              <Tab _selected={style} display="block" mr="10px">
                <Image boxSize="80px" m="0 auto" src={Icon4}></Image>
                <Text>人工智能</Text>
              </Tab>
              <Tab _selected={style} display="block" mr="10px">
                <Image boxSize="80px" m="0 auto" src={Icon5}></Image>
                <Text>数据科学</Text>
              </Tab>
            </TabList>
            <TabPanels
              height="520px"
              width="820px"
              p="20px"
              overflow="hidden"
              mt="30px"
            >
              <TabPanel>
                <Image fit="cover" src={Block} />
              </TabPanel>
              <TabPanel>
                <Image fit="cover" src={Python} />
              </TabPanel>
              <TabPanel>
                <Image fit="cover" src={Python} />
              </TabPanel>
              <TabPanel>
                <Image fit="cover" src={Python} />
              </TabPanel>
              <TabPanel>
                <Image fit="cover" src={Python} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default Home;
