import React, { Component } from 'react';
import bg1 from "../../assets/bg-01.jpg";
import bg3 from "../../assets/bg-02.png";
import bg2 from "../../assets/bg-frame.png";
import python from "../../assets/img-python-zh.jpg";
import block from "../../assets/img-block-zh.jpg";


import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import './index.css';
class Software extends Component {

    constructor(props) {
        super(props)
        this.state = {
            aboutNav: [
                {
                    id: '1',
                    name: "图形化编程模式"
                },
                {
                    id: '2',
                    name: "Python编程模式"
                },
            ],
            aboutNavID: 1,
        }
    }
    aboutClict = (i) => {
        this.setState({
            aboutNavID: i
        })
    }

    render() {
        const { aboutNavID, aboutNav } = this.state;
        return (
            <Box paddingTop="70px">
                <Box bg={`url(${bg1})`} height="590px" backgroundSize="cover" position="relative" overflow="hidden">
                    <Box textAlign="center" paddingTop="50px" fontSize="32px" color="#fff" fontWeight="400">专注软硬结合的国产双模式编程软件</Box>
                    <Box textAlign="center" paddingBottom="30px" fontSize="14px" color="#fff" fontWeight="400">深受全球 1500 万老师和学生的信赖</Box>

                    <Box width="440px"
                        border="2px solid rgba(255,255,255,0.4)"
                        fontSize="16px"
                        color="#fff"
                        height="42px" lineHeight="38px" margin="0 auto 30px" bg="rgba(255,255,255,0.1)" borderRadius="50px">
                        {
                            aboutNav.map((item, index) => {
                                return (
                                    <Box key={index} cursor="pointer"
                                        display="inline-block"
                                        width="50%"
                                        textAlign="center"
                                        onClick={() => this.aboutClict(item.id)}

                                        className={aboutNavID == item.id ? "name" : ""}

                                    >{item.name}</Box>
                                )
                            })
                        }
                    </Box>
                    <Box  overflow="hidden" bg={`url(${bg2})`} width="680px" height="394px" margin="0 auto" backgroundSize="cover">

                        {
                            aboutNavID == 1 ?
                                (<Box padding="20px">
                                    <Image src={python} />
                                </Box>)
                                : aboutNavID == 2 ?
                                    (<Box padding="20px">
                                        <Image src={block} />
                                    </Box>)
                                    : null
                        }



                    </Box>
                    
                    <Box  bg={`url(${bg3})`} position="absolute" width="100%" height="166px" left="0"  bottom="0" backgroundSize="contain">

                    </Box>
                
                
                </Box>

            </Box>
        );
    }
}

export default Software;
