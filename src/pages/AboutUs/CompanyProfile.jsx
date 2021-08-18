import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import Company1 from "../../assets/Company1.jpg";
import Company2 from "../../assets/Company2.jpg";
import Company3 from "../../assets/Company3.png";
import Company17 from "../../assets/Company17.png";

function CompanyProfile() {
    return (
        <Box bg="#f9f9f9">

            <Box paddingBottom="30px" w="1160px" m="0 auto" bg="#fff">
                <Box>
                    <Image src={Company1} width="100%"></Image>
                </Box>
                <Box padding="100px">
                    <Box fontSize="22px" color="#333" paddingBottom="10px">公司简介</Box>
                    <Box color="#9b9b9b" lineHeight="26px" fontSize="16px"  paddingBottom="60px">
                        童心制物（Makeblock）是深圳市创客工场科技有限公司旗下品牌，成立于2013年，是一家服务全球的 STEAM 教育解决方案提供商。
                        我们面向学校、教培机构、家庭的 STEAM 教育场景和娱乐场景，提供齐全
                        的机器人硬件、编程软件，输出优质的教学内容，并打造国际化的青少年机器人赛事。童心制物致力于降低创造的门槛，让每个人都能实现奇思妙想，享受创造的乐趣。
                    </Box>
                    <Box d="flex">
                        <Box w="45%" p={3}>
                            <Image src={Company2} width="100%"></Image>
                        </Box>
                        <Box w="55%" p={3}>
                            <Box fontSize="22px" color="#333" paddingBottom="10px">创始人&CEO</Box>
                            <Box  color="#9b9b9b" lineHeight="26px" fontSize="16px"  paddingBottom="30px">王建军毕业于西北工业大学，是一名追求极致的机器人爱好者、产品经理及资深创客，曾入选福布斯“2013中国30位30岁以下创业者”精英榜。</Box>
                            <Box  color="#9b9b9b" lineHeight="26px" fontSize="16px">他怀揣着让每个人都能轻松创造的理想，创立了童心制物（Makeblock）品牌，致力于运用创新和科技的力量，帮助更多人享受创造的乐趣。</Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Image src={Company3} width="100%"></Image>
                </Box>
                <Box textAlign="center" padding="60px 100px">
                    <Box fontSize="22px" color="#333" paddingBottom="10px" >公司简介</Box>
                    <Box color="#9b9b9b" lineHeight="26px" fontSize="16px"  paddingBottom="20px">截至目前，童心制物（Makeblock）已将产品销往全球140多个国家和地区，拥有超过1600个渠道合作伙伴，用户人数超过1800万并持续增长。
                        同时，我们的产品已进入全球25,000多所学校，被广泛应用于课堂教学及家庭教育，为孩子提供 STEAM 教育启蒙。</Box>
                    <Box color="#9b9b9b" lineHeight="26px" fontSize="16px"  paddingBottom="20px">在法国，我们的产品已被写入法国学校教科书，超过6000所法国小学和初中都在使用；在中国香港，有超过一半以上的中小学使用我们的 STEAM 教育解决方案，仅在2017年，就有超过200场主题工作坊和机器人比赛；在南极，mBot 系列机器人成功帮助欧洲学生科考团完成极地考察任务；在非洲，我们与联合国教科文组织合作，作为官方指定的机器人供应商进驻马里首个国家机器人教育中心；在俄罗斯, 超过半数政府投资的儿童科技园“Kvantorium (Кванториум)”使用我们的教育解决方案，旨在为培养更多战略储备人才奠定基础；在全球，神经元探索者套件于2018年全面登陆 Apple Store，兼容苹果 Swift Playgrounds 编程软件，全面推动编程教育。</Box>
                    <Box color="#9b9b9b" lineHeight="26px" fontSize="16px" >在全球布局上，童心制物在欧洲、美国、日本和中国香港均设有子公司，并于2017年与日本软银C&S 达成战略合作。</Box>
                </Box>
                <Box textAlign="center">
                    <Image src={Company17} width="762px"></Image>
                </Box>



                <Box d="flex">
                    <Box w="25%" p={6}>

                    </Box>
                </Box>
            </Box>




        </Box>
    );
}
export default CompanyProfile;
