import React, { Component } from 'react'
import { Box } from "@chakra-ui/react";
import CompanyProfile from "./CompanyProfile";

export default class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutNav: [
                {
                    id: '1',
                    name: "公司简介"
                },
                {
                    id: '2',
                    name: "愿景与使命"
                },
                {
                    id: '3',
                    name: "联系我们"
                },
            ],
            aboutNavID: 1,
        }
    }
    aboutClict = (i) => {
        console.log(i)
        this.setState({
            aboutNavID: i
        })
    }



    render() {
        const { aboutNavID, aboutNav } = this.state;
        return (
            <Box>
                <Box bg="#ccc" padding="20px 0">
                    <Box padding="0 80px" d="flex" w="1300px" margin="0 auto" justifyContent="space-around" flexDirection="row" >
                        {
                            aboutNav.map((item, index) => {
                                return (
                                    <Box key={index} cursor="pointer" onClick={() => this.aboutClict(item.id)}>{item.name}{aboutNavID}</Box>
                                )
                            })
                        }
                    </Box>
                </Box>
                {
                    aboutNavID == 1 ? 
                    (<CompanyProfile ></CompanyProfile>) 
                    : aboutNavID == 2 ? 
                    (<Box>22</Box>) 
                    : aboutNavID == 3 ? 
                    (<Box >33</Box>)
                    : null
                }

            </Box>
        )
    }
}
