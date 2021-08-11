import React, { Component } from 'react';
import axios from 'axios'
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



class newsLi extends Component {

    componentDidMount() {

        console.log(999999999999)
        this.getData()
    
      }

      getData=()=>{
        //通过axios获取服务器数据
        var api='https://www.fastmock.site/mock/5354fbda36a6ad4f66a1e26d32d80a80/news/api/getNews';   //接口后台允许了跨域
        axios.get(api)
        // 箭头函数改变this指向
        .then((res)=> {
            console.log(111)
            console.log(res)

        })
        .catch(function (error) {
            console.log(22222);
        });
    }

    constructor(props) {
        super(props)
        this.state = {
            newsList: [
                {
                    newsTitle: "11111在线教育专业委员会成立，编程猫等入选首批58家成员并当选副主任委员",
                    dec: "111113月16日，由中央网信办主管的中国网络社会组织联合会（简称“中网联”）在北京成立了在线教育专业委员会，编程猫入选首批58家成员单位，并当选副主任委员单位。在成立大会上，编程猫参与发布《促进在线教育行业健康发展倡议书》，从5大方面倡导加强行业自律，规范市场管理，助推在线教育健康发展。 ",
                    link: "https://www.jiemodui.com/N/123274",
                    source: "11111新闻网",
                    newImage: "https://cdn-community.codemao.cn/718/1627875981712图片1 (1).png"
                },
                {
                    newsTitle: "33333在线教育专业委员会成立，编程猫等入选首批58家成员并当选副主任委员",
                    dec: "222223月16日，由中央网信办主管的中国网络社会组织联合会（简称“中网联”）在北京成立了在线教育专业委员会，编程猫入选首批58家成员单位，并当选副主任委员单位。在成立大会上，编程猫参与发布《促进在线教育行业健康发展倡议书》，从5大方面倡导加强行业自律，规范市场管理，助推在线教育健康发展。 ",
                    link: "https://www.jiemodui.com/N/123274",
                    source: "22222新闻网",
                    newImage: "https://cdn-community.codemao.cn/718/1627875981712图片1 (1).png"
                },
                {
                    newsTitle: "33333在线教育专业委员会成立，编程猫等入选首批58家成员并当选副主任委员",
                    dec: "333333月16日，由中央网信办主管的中国网络社会组织联合会（简称“中网联”）在北京成立了在线教育专业委员会，编程猫入选首批58家成员单位，并当选副主任委员单位。在成立大会上，编程猫参与发布《促进在线教育行业健康发展倡议书》，从5大方面倡导加强行业自律，规范市场管理，助推在线教育健康发展。 ",
                    link: "https://www.jiemodui.com/N/123274",
                    source: "33333新闻网",
                    newImage: "https://cdn-community.codemao.cn/718/1627875981712图片1 (1).png"
                },
            ]
        }
    }





    render() {
        return (
            <Box padding="60px 80px" bg="#fafafb">

                {
                this.state.newsList.map((item,index)=>{
                    return(
                    <Link href="https://www.jiemodui.com/N/123274" key={index}>
                    <Box marginBottom="30px" d="flex" padding="40px" borderRadius="15px" bg="#ffffff" boxShadow="0 -0.1rem 0.6rem 0 rgb(150 170 218 / 10%)">

                        <Box w="25%">
                            <Image src={item.newImage}
                                height="200px" borderRadius="15px"
                            ></Image>
                        </Box>
                        <Box w="70%" marginLeft="auto">
                            <Box color="#333333" fontWeight="bold" fontSize="24px"
                            >{item.newsTitle}</Box>
                            <Box color="#999" paddingTop="10px" lineHeight="30px">{item.dec}</Box>
                            <Box paddingTop="10px" color="#f44">
                            {item.source}
                            </Box>
                        </Box>
                    </Box>
                </Link>
                )   
            })
    
                }






            </Box>
        );
    }
}

export default newsLi;
