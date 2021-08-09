import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import Curriculum1 from "../../assets/Curriculum1.png";
import Curriculum2 from "../../assets/Curriculum2.png";
import Curriculum3 from "../../assets/Curriculum3.png";
import Curriculum4 from "../../assets/Curriculum4.png";
import Curriculum5 from "../../assets/Curriculum5.png";
import Curriculum6 from "../../assets/Curriculum6.png";
import Curriculum7 from "../../assets/Curriculum7.png";
import Curriculum8 from "../../assets/Curriculum8.png";
import Curriculum9 from "../../assets/Curriculum9.png";
import Curriculum10 from "../../assets/Curriculum10.png";


function Introduce() {


    return (
        <Box padding="0 80px 80px" textAlign="center">
            <Box fontSize="36px" fontWeight="400" lineHeight="61px" color="#333333" textAlign="center"
            position="relative">课程体系</Box>
            <Box  width="36px"height="6px"background=" #E61E32"borderRadius="20px"margin="5px auto 20px"></Box>
            <Box paddingBottom="60px">
                <Image src={Curriculum1}  display="inline-block" marginRight="10px"/>
                <Box display="inline-block" fontSize="18px" verticalAlign="bottom">基于创客教育基础素养的课程体系</Box>
            </Box>
            <Box  d="flex" flexDirection="row"  alignItems="top">
                <Box  width="16.6%">
                    <Image src={Curriculum2}  display="inline-block"/>
                    <Box padding="10px" fontSize="16px" color="#00a7e2">创新思维</Box>
                    <Box  padding="0 20px" fontSize="12px">基于STEAM教育的思维训练教程</Box>
                </Box>
                <Box  width="16.6%">
                    <Image src={Curriculum3}  display="inline-block"/>
                    <Box padding="10px" fontSize="16px" color="#fdac0e">编程教育</Box>
                    <Box  padding="0 20px" fontSize="12px">基于STEAM深度开发的Labplus软件开发互动编程课程</Box>
                </Box>
                <Box  width="16.6%">
                    <Image src={Curriculum4}  display="inline-block"/>
                    <Box padding="10px" fontSize="16px" color="#2da05a">智能电子</Box>
                    <Box  padding="0 20px" fontSize="12px">基于智能电子硬件深度开发的产品及课程</Box>
                </Box>
                <Box  width="16.6%">
                    <Image src={Curriculum5}  display="inline-block"/>
                    <Box padding="10px" fontSize="16px" color="#ef750e">结构设计</Box>
                    <Box  padding="0 20px" fontSize="12px">基于草图大师建模软件的3D建模课程</Box>
                </Box>
                <Box  width="16.6%">
                    <Image src={Curriculum7}  display="inline-block"/>
                    <Box padding="10px" fontSize="16px" color="#ef750e">数字化工具及材料</Box>
                    <Box  padding="0 20px" fontSize="12px">基于激光切割机，3D打印机，微型机床工具的课程</Box>
                </Box>
                <Box  width="16.6%">
                    <Image src={Curriculum8}  display="inline-block"/>
                    <Box padding="10px" fontSize="16px" color="#bc2787">分享</Box>
                    <Box  padding="0 20px" fontSize="12px">基于创意和作品的演讲分享交流课程</Box>
                </Box>
            </Box>

            <Box paddingBottom="30px" paddingTop="80px">
                <Image src={Curriculum9}  display="inline-block" marginRight="10px"/>
                <Box display="inline-block" fontSize="18px" verticalAlign="bottom">体系化创客教育课程</Box>
            </Box>
            <Box padding="10px 200px 30px" textAlign="center" color="#aaaaaa">盛思联合国内创客教育专家与名师编辑了软件编程、智能电子、3D打印、物联网、人工智能、机器人等一系列STEAM创客教育课程，经多地名校实践和完善，现已有20余本教材出版发行。</Box>
            <Image src={Curriculum10} />

        </Box>
    );
}
export default Introduce;
