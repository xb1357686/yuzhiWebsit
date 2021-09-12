import {
    Text,
    Flex,
    Image,
    Menu,
    MenuButton,
    Box,
    MenuList,
    MenuItem,
    Button,
    Link,
    Heading,
  } from "@chakra-ui/react";
import React, { Component } from 'react';

import banner8 from "../../assets/banner8.png";
import bg1 from "../../assets/bg1-2.png";
import withMbuild from "../../assets/with-mbuild.png";
import learne from "../../assets/learn-computer-science.png";
import explore from "../../assets/explore-data-science.png";
import step1 from "../../assets/step1.png";
import screen1 from "../../assets/screen1.png";
import iconOK from "../../assets/iconOK.png";
import iconEntry from "../../assets/iconEntry.png";
import iconPy from "../../assets/iconPy.png";
import step2 from "../../assets/step2.png";
import video3cover from "../../assets/video3cover.png";
import video4cover from "../../assets/video4cover.png";
import video5cover from "../../assets/video5cover.png";
import step3 from "../../assets/step3.png";
import cyberOS from "../../assets/cyberOS.png";


class cyberpi extends Component {
    render() {
        return (
            <Box>
                <Box paddingTop="70px" bg={`url(${bg1})`} height="650px" backgroundSize="cover"backgroundPosition="center">
                   <Box  w="1160px" m="0 auto">
                       <Box color="#fff" width="400px"  marginLeft="180px" paddingTop="140px">
                        <Box fontSize="62px" paddingBottom="20px" fontWeight="bold">天空一号</Box>
                        <Box fontSize="24px"  paddingBottom="10px" lineHeight="30px">用于计算机科学和AI教育的可联网微控制器</Box>
                        <Box color="#9fa5af" fontSize="16px">“童芯派“专为 AIoT 与 Python 教学而设计，配套慧编程软件， 可实践入门到精通的 AIoT 应用教学，并把好玩有趣的 Python编程带入课堂。无论是创新科技应用还是编程普及，童芯派都能完美适配”趣“教学。</Box>
                       </Box>
                   </Box>
                </Box>
                <Box bg="#0B1D3D">
                    <Box   w="1060px" m="0 auto">
                        <Box fontSize="48px" padding="70px 0" color="#fff" textAlign="center" fontWeight="bold">AI 与 Python 教学神器</Box>
                        <Box textAlign="center">
                            <Image src={withMbuild} display="inline-block" width="274px"/>
                            <Image src={learne}  display="inline-block"  width="274px" margin="0 20px"/>
                            <Image src={explore} display="inline-block"  width="274px"/>
                        </Box>
                        <Box textAlign="center" paddingTop="30px">
                            <Image src={step1} display="inline-block" />
                            <Box fontSize="48px" padding="20px 0" color="#fff" textAlign="center" fontWeight="bold">硬件和软件的结合使Python学习引人入胜</Box>
                            <Box fontSize="22px" padding="20px 0" color="#fff" >全新的mBlock Python编辑器是一个旨在学习和教授Python和Micropython的平台，它将AI和数据科学的学习推向了下一个台阶。</Box>
                            
                            <Image src={screen1} display="inline-block" paddingTop="10px"/>
                            <Box marginTop="35px" fontSize="28px" padding="20px 0" color="#fff" fontWeight="bold">以全新的方式增强Python的教学和创建能力</Box>
                            <Box  fontSize="16px" padding="20px 0 50px" color="#fff" >只需一个按钮即可安装编辑器| 使用按钮下载第三方python库| 丰富的硬件和软件示例程序</Box>
                            <Box textAlign="center" color="#fff" paddingBottom="140px">
                                <Box display="inline-block"  width="274px"  verticalAlign="top">
                                    <Image src={ iconEntry} display="inline-block"  width="92px"/>
                                    <Box fontSize="22px" paddingTop="20px">访问Python编辑器</Box>
                                    <Box>python.makeblock.com</Box>
                                </Box>
                                <Box display="inline-block" width="274px"   margin="0 20px">
                                <Image src={ iconPy} display="inline-block"  width="92px"/>
                                <Box fontSize="22px" paddingTop="20px">下载mLink2</Box>
                                </Box>
                                <Box display="inline-block" width="274px" >
                                <Image src={iconOK}  display="inline-block"  width="92px"/>
                                <Box fontSize="22px" paddingTop="20px">即刻上手教学！</Box>
                                </Box>
                            </Box>   
                        </Box>
                    </Box>
                </Box>
                <Box bg="#eef3fa">
                    <Box textAlign="center" paddingTop="180px">
                    <Box  textAlign="center" >
                            <Image src={step2}  display="inline-block" />
                            <Box fontSize="48px" fontWeight="bold" color="#171e49" padding="60px 0 120px">教授人工智能和物联网的强大工具</Box>
                
                        </Box>

                        <Box color="#171e49" paddingBottom="140px"   >
                            <Box display="inline-block"  width="274px"  verticalAlign="top">
                                <Image src={ video3cover} display="inline-block"  width="274px"/>
                                <Box textAlign="left" fontSize="22px" paddingTop="20px">将数据科学引入课堂并可视化学习成果</Box>
                                <Box textAlign="left">1.44英寸高清全彩屏幕，用于以多种颜色显示不同的数据，使数据收集，处理和统计信息完全可视化。</Box>
                            
                            </Box>
                            <Box display="inline-block" width="274px"   margin="0 20px">
                            <Image src={ video4cover} display="inline-block"  width="274px"/>
                            <Box textAlign="left" fontSize="22px" paddingTop="20px">认识NLP并探索人机交互</Box>
                            <Box textAlign="left">CyberPi具有内置麦克风和高品质扬声器，可与mBlock的认知服务配合使用，使语音识别和文本阅读更加轻松，从而帮助学生探索先进技术。</Box>
                            
                            </Box>
                            <Box display="inline-block" width="274px" verticalAlign="top">
                            <Image src={video5cover}  display="inline-block"  width="274px"/>
                            <Box textAlign="left" fontSize="22px" paddingTop="20px">创建有趣的IoT和LAN项目</Box>
                                <Box textAlign="left">凭借其内置的Wi-Fi模块和mBlock的云广播功能，CyberPi可用于创建IoT项目，例如DIY智能家电。</Box>
                            
                            </Box>
                        </Box> 

                        <Box  textAlign="center" paddingBottom="50px">
                            <Image src={step3}  display="inline-block" paddingBottom="100px"/>

                            <Box margin="0 auto" bg={`url(${cyberOS})`} height="560px" width="900px">
                                <Box float="right" width="430px" textAlign="left" color="#fff">
                                    <Box fontWeight="bold" 
                                        fontSize="48px"
                                        paddingBottom="40px"
                                        paddingTop="140px"
                                    >CyberOS-强大的操作系统</Box>
                                    <Box fontSize="28px" paddingBottom="20px">为CyberPi设计的自行开发的操作系统</Box>
                                    <Box>存储多个程序并在程序之间无缝切换 允许重命名设备| Wi-Fi自动加入</Box>
                                </Box>
                            </Box>
                        </Box>
                    
                    </Box>
                </Box>

            </Box>

        );
    }
}

export default cyberpi;
