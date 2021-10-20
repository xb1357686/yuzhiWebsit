import { Image, Box, Text, Button, Link, Flex } from "@chakra-ui/react";
import coos1 from "../../assets/coos1.JPG";
import coos2 from "../../assets/coos2.JPG";
import coos3 from "../../assets/coos3.JPG";
import coos4 from "../../assets/coos4.JPG";
import coos5 from "../../assets/coos5.JPG";
import coos6 from "../../assets/coos6.JPG";
import Company1 from "../../assets/Company1.jpg";

function CompanyProfile() {
  return (
    <Box bg="#f9f9f9" textAlign="center">
      <Box paddingBottom="30px" w="1160px" m="0 auto" bg="#fff">
        <Box>
          <Image src={Company1} width="100%"></Image>
        </Box>
        <Box padding="100px">
          <Box fontSize="22px" color="#333" paddingBottom="10px">
            公司简介
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="60px"
          >
            深圳育智科创科技有限公司(简称“育智科创”)，成立于2019年，是国内领先的青少年科技创新教育解决方案提供商。
            公司专注于青少年科技创新教育产品的研发、生产与销售，倡导启发式、探究式、开放式教学，推行场景式、体验式、沉浸式学习，为个人提供科技创新教育产品，
            为中小学校等教育机构提供科技创新教育整体解决方案。
            公司旨在激发青少年好奇心和想象力，增强科学兴趣、创新意识和创新能力。
          </Box>
          <Box fontSize="22px" color="#333" paddingBottom="10px">
            企业愿景
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="60px"
          >
            打造科技创新教育产品国际优秀品牌
          </Box>
          <Box fontSize="22px" color="#333" paddingBottom="10px">
            企业使命
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="60px"
          >
            为社会培养创新型人才助力！ <br />
            为中国建设创新型社会赋能！
          </Box>
          <Box fontSize="22px" color="#333" paddingBottom="10px">
            企业价值观
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="60px"
          >
            开拓创新 追求卓越
          </Box>
          <Box fontSize="22px" color="#333" paddingBottom="10px">
            证书与资质
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="60px"
          >
            <Flex>
              <Image src={coos1} width="100%" height="500px"></Image>
              <Image src={coos2} m="0 10px" width="100%" height="500px"></Image>
              <Image src={coos3} width="100%" height="500px"></Image>
            </Flex>
            <Flex>
              <Image src={coos4} width="100%" height="500px"></Image>
              <Image src={coos5} m="0 10px" width="100%" height="500px"></Image>
              <Image src={coos6} width="100%" height="500px"></Image>
            </Flex>
          </Box>
          {/* <Box d="flex">
            <Box w="45%" p={3}>
              <Image src={Company2}></Image>
            </Box>
            <Box w="55%" p={3}>
              <Box fontSize="22px" color="#333" paddingBottom="10px">
                创始人&CEO
              </Box>
              <Box
                color="#9b9b9b"
                lineHeight="26px"
                fontSize="16px"
                paddingBottom="30px"
              >
                王建军毕业于西北工业大学，是一名追求极致的机器人爱好者、产品经理及资深创客，曾入选福布斯“2013中国30位30岁以下创业者”精英榜。
              </Box>
              <Box color="#9b9b9b" lineHeight="26px" fontSize="16px">
                他怀揣着让每个人都能轻松创造的理想，创立了童心制物（Makeblock）品牌，致力于运用创新和科技的力量，帮助更多人享受创造的乐趣。
              </Box>
            </Box>
          </Box> */}
        </Box>
        {/* <Box>
          <Image src={Company3} width="100%"></Image>
        </Box>
        <Box textAlign="center" padding="60px 100px">
          <Box fontSize="22px" color="#333" paddingBottom="10px">
            公司简介
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="20px"
          >
            截至目前，童心制物（Makeblock）已将产品销往全球140多个国家和地区，拥有超过1600个渠道合作伙伴，用户人数超过1800万并持续增长。
            同时，我们的产品已进入全球25,000多所学校，被广泛应用于课堂教学及家庭教育，为孩子提供
            STEAM 教育启蒙。
          </Box>
          <Box
            color="#9b9b9b"
            lineHeight="26px"
            fontSize="16px"
            paddingBottom="20px"
          >
            在法国，我们的产品已被写入法国学校教科书，超过6000所法国小学和初中都在使用；在中国香港，有超过一半以上的中小学使用我们的
            STEAM
            教育解决方案，仅在2017年，就有超过200场主题工作坊和机器人比赛；在南极，mBot
            系列机器人成功帮助欧洲学生科考团完成极地考察任务；在非洲，我们与联合国教科文组织合作，作为官方指定的机器人供应商进驻马里首个国家机器人教育中心；在俄罗斯,
            超过半数政府投资的儿童科技园“Kvantorium
            (Кванториум)”使用我们的教育解决方案，旨在为培养更多战略储备人才奠定基础；在全球，神经元探索者套件于2018年全面登陆
            Apple Store，兼容苹果 Swift Playgrounds 编程软件，全面推动编程教育。
          </Box>
          <Box color="#9b9b9b" lineHeight="26px" fontSize="16px">
            在全球布局上，童心制物在欧洲、美国、日本和中国香港均设有子公司，并于2017年与日本软银C&S
            达成战略合作。
          </Box>
        </Box>
        <Box textAlign="center">
          <Image src={Company17} width="762px" margin="0 auto"></Image>
        </Box>
        <Box textAlign="center" bg="#F2F2F2" padding="80px 0">
          <Box fontSize="22px" color="#333" paddingBottom="20px">
            国际获奖
          </Box>
          <Box color="#9b9b9b" fontSize="16px" paddingBottom="20px">
            童心制物产品在设计及创新发明领域得到了广泛的认可,
            共获得8项国际大奖。
          </Box>

          <Image src={Company4} width="862px" margin="0 auto"></Image>
        </Box>
        <Box
          textAlign="center"
          padding="80px 0"
          borderBottom="1px solid #f9f9f9"
        >
          <Box fontSize="22px" color="#333" paddingBottom="20px">
            国际教育认证
          </Box>
          <Box color="#9b9b9b" fontSize="16px" paddingBottom="20px">
            在教育领域，童心制物产品获得芬兰 EAF 国际教育品牌认证（EAF 的前身为
            Kokoa Standard）。
          </Box>

          <Image src={Company5} width="160px" margin="0 auto"></Image>
        </Box> */}
        {/* <Box
          textAlign="center"
          padding="80px 0"
          borderBottom="1px solid #f9f9f9"
        >
          <Box fontSize="22px" color="#333" paddingBottom="20px">
            企业荣誉
          </Box>
          <Image src={Company6} width="700px" margin="0 auto"></Image>
        </Box>
        <Box
          textAlign="center"
          padding="80px 0"
          borderBottom="1px solid #f9f9f9"
        >
          <Box fontSize="22px" color="#333" paddingBottom="20px">
            企业荣誉
          </Box>
          <Image src={Company7} width="700px" margin="0 auto"></Image>
        </Box>
        <Box paddingTop="80px">
          <Box
            textAlign="center"
            fontSize="22px"
            color="#333"
            paddingBottom="10px"
          >
            发展时间轴
          </Box>
          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2019
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company8} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    12月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    童小点（mTiny）入选2019年深圳礼物榜单，被评选为最具深圳代表性与信服力的优质产品之一
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    10月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    发布真正免调平的多功能 3D 打印机
                    “mCreate”、新一代人工智能电子模块平台 “mBuild”
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    9月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    全球用户总数突破1000万
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    8月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    童心制物进驻华为全球多家旗舰店
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    7月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    成立 STEAM
                    教育研究中心，提供体系化的教育内容，全面满足中小学、教培及家庭对
                    STEAM 教育的实际需求
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    5月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    发布思维启蒙机器人“童小点”、订阅式家庭编程教育套装“童心制物编程造物盒”
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    3月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    推出定制化的 STEAM 教育解决方案
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    2月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    推出慧编程 PC 端正式版
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2018
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company9} width="300px" margin="0 auto"></Image>
                <Image src={Company10} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    10月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    <p>启用 Makeblock 中文品牌名“童心制物”</p>
                    <p>
                      发布可编程多形态运动机器人“灵跃模组机器人”、桌面级智能激光切割机“激光宝盒”、无线联网单板计算机“光环板”
                    </p>
                    <p>
                      与全球教育收纳解决方案提供商 Gratnells 达成合作，推出
                      STEAM 创造实验室整体解决方案
                    </p>
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    9月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    {" "}
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    9月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    神经元探索者套件于2018年登陆 Apple Store
                    和线上商店，兼容苹果 Swift Playgrounds
                    编程软件，全面推动编程教育{" "}
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    8月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    获得由中金甲子领投的3亿元人民币 C 轮融资{" "}
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    6月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    联合美国 Vernier Software & Technology 公司推出美国标准
                    STEAM 编程课程{" "}
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    5月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    全球用户总数突破600万{" "}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2017
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company11} width="300px" margin="0 auto"></Image>
                <Image src={Company12} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    12月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    全球用户突破450万
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    11月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    {" "}
                    发布普及型编程机器人程小奔 Codey Rocky
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    8月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    开设美国、欧洲、中国香港、日本子公司
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    7月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    与日本软银C&S 达成战略合作，全面进入日本市场{" "}
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    5月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    发布面向青少年的 MakeX 机器人挑战赛{" "}
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    3月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    <p>
                      获得深创投领投的3000万美金 B 轮融资，此轮融资后 Makeblock
                      估值达到2亿美金
                    </p>
                    <p>发布可编程电子积木平台神经元 Makeblock Neuron</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2016
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company13} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    11月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    发布首款游戏化编程软件 M部落
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    10月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    <p>发布模块化可编程飞行器 Airblock</p>
                    <p>与工信部合作，承办 RoboCom 2016世界机器人大赛</p>
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    7月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    与微软持续战略合作，产品集成微软认知服务
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    6月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    <p>产品远销世界各国，进入超过25,000所学校</p>
                    <p>开设第一家线下体验店，正式进军大众消费市场</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2015
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company14} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    12月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    与1000+家教育机构合作
                  </Box>
                </Box>
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    10月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    <p>获得红杉资本600万美元 A 轮投资</p>
                    <p>
                      发布可编程的 DIY 机器人套件 mBot，绘图机器人套件 mDrawBot
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2014
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company15} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    2月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    推出自主研发，与硬件结合的图形化编程软件慧编程，并进军教育领域
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box paddingTop="30px">
            <Box
              textAlign="center"
              fontSize="30px"
              color="#00bbff"
              paddingBottom="10px"
            >
              2013
            </Box>
            <Box d="flex">
              <Box w="40%" p={3}>
                <Image src={Company16} width="300px" margin="0 auto"></Image>
              </Box>
              <Box w="60%" p={3} fontSize="14px" color="#888">
                <Box paddingBottom="10px">
                  <Box display="inline-block" marginRight="30px">
                    6月
                  </Box>
                  <Box display="inline-block" w="500px" verticalAlign="top">
                    <p>获得云天使基金300万天使轮投资</p>
                    <p>深圳市创客工场科技有限公司成立</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box d="flex">
          <Box w="25%" p={6}></Box>
        </Box> */}
      </Box>
    </Box>
  );
}
export default CompanyProfile;
