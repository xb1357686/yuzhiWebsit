import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import contact1 from "../../assets/contact1.jpg";
import contact2 from "../../assets/contact2.jpg";
import contact3 from "../../assets/contact3.png";
import contact4 from "../../assets/contact4.jpg";
import contact5 from "../../assets/contact5.jpg";

function CompanyProfile() {
    return (
        <Box bg="#f9f9f9">

            <Box paddingBottom="30px" w="1160px" m="0 auto" d="flex">
                <Box w="33.3%" p={3}>
                    <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
                        <Box>
                            <Image src={contact1} width="100%"></Image>
                        </Box>
                        <Box padding="30px">
                            <Box fontSize="22px" color="#666666" paddingBottom="10px">香港子公司</Box>
                            <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                                <Box>邮箱: hk@makeblock.com</Box>
                                <Box>地址: 香港湾仔皇后大道东28号金钟汇中心18楼</Box>
                                <Box>工作时间: 周一至周五，9:00-18:30 (UTC+8)</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box bg="#fff" marginTop="20px" boxShadow="0px 1px 10px #ccc">
                        <Box>
                            <Image src={contact4} width="100%"></Image>
                        </Box>
                        <Box padding="30px">
                            <Box fontSize="22px" color="#666666" paddingBottom="10px">美国子公司</Box>
                            <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                                <Box>邮箱: us@makeblock.com</Box>
                                <Box>电话: +213 784 9176</Box>
                                <Box>地址: 美国 加利福尼亚州</Box>
                                <Box>工作时间: 周一至周五，9:00-18:00 (PST)</Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box w="33.3%" p={3}>
                    <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
                        <Box>
                            <Image src={contact2} width="100%"></Image>
                        </Box>
                        <Box padding="30px">
                            <Box fontSize="22px" color="#666666" paddingBottom="10px">深圳</Box>
                            <Box fontSize="22px" color="#666666" paddingBottom="10px">中国总部</Box>
                            <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                                <Box>前台电话: +86 (0)755-26392228</Box>
                                <Box>  公司地址: 深圳市南山区学苑大道1001号南山智园C3栋3楼，518057</Box>
                                <Box> 销售业务(中国): sales.cn@makeblock.com </Box>
                                <Box> 销售业务(全球): sales@makeblock.com </Box>
                                <Box> 商务合作: bd@makeblock.com </Box>
                                <Box> 媒体联络: pr@makeblock.com </Box>
                                <Box> 市场活动: marketing@makeblock.com </Box>
                                <Box> 技术支持热线: 400-893-0004 </Box>
                                <Box> 技术支持QQ群: 800182013 </Box>
                                <Box> 技术支持(中国): support.cn@makeblock.com </Box>
                                <Box> 技术支持(全球): support@makeblock.com </Box>
                                <Box> 信息咨询: info@makeblock.com </Box>
                                <Box> 人才招聘: career@makeblock.com </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>



                <Box w="33.3%" p={3}>
                    <Box bg="#fff" boxShadow="0px 1px 10px #ccc">
                        <Box>
                            <Image src={contact3} width="100%"></Image>
                        </Box>
                        <Box padding="30px">
                            <Box fontSize="22px" color="#666666" paddingBottom="10px">日本子公司</Box>
                            <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                                <Box>邮箱: jp@makeblock.com</Box>
                                <Box>地址: 日本 东京</Box>
                                <Box>工作时间: 周一至周五，9:00-18:30 (UTC+9)</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box bg="#fff" marginTop="20px" boxShadow="0px 1px 10px #ccc">
                        <Box>
                            <Image src={contact5} width="100%"></Image>
                        </Box>
                        <Box padding="30px">
                            <Box fontSize="22px" color="#666666" paddingBottom="10px">欧洲子公司</Box>
                            <Box fontSize="14px" color="#9b9b9b" lineHeight="24px">
                                <Box>邮箱: eu@makeblock.com</Box>
                                <Box>电话: +31 (0)6 1264 5740</Box>
                                <Box>地址: 荷兰 阿姆斯特丹</Box>
                                <Box>工作时间: 周一至周五，9:00-18:00 (CET)</Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>




            </Box>




        </Box>
    );
}
export default CompanyProfile;
