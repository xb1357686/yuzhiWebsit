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
import code1 from "../../assets/code1.png";
import code2 from "../../assets/code2.png";
import tb from "../../assets/tb.jpg";
import Address from "./address";

function Footer() {
  return (
    <Box>
      <Box padding="80px 80px 40px" d="flex">
        <Box w="150px">
          <Box
            fontSize="22px"
            fontWeight="bold"
            color="#666"
            paddingBottom="30px"
          >
            关于我们
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            <Link href="https://chakra-ui.com">公司简介</Link>
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            <Link href="https://chakra-ui.com">愿景与使命</Link>
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            <Link href="https://chakra-ui.com">证书与资质</Link>
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            <Link href="https://chakra-ui.com">人才招募-叶永浩</Link>
          </Box>
        </Box>

        <Box w="150px">
          <Box
            fontSize="22px"
            fontWeight="bold"
            color="#666"
            paddingBottom="30px"
          >
            新闻中心
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            <Link href="https://chakra-ui.com">官方新闻</Link>
          </Box>
        </Box>
        <Box w="450px">
          <Box
            fontSize="22px"
            fontWeight="bold"
            color="#666"
            paddingBottom="30px"
          >
            联系我们
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            公司地址：深圳市南学山区西丽街道未来科城先进制造产业园1层
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            邮箱账号：bd@uz-ai.com
          </Box>
          <Box fontSize="14px" color="#666" paddingBottom="10px">
            公司座机: 0755-85289674
          </Box>
          <Box d="flex">
            <Box fontSize="14px" color="#666" paddingBottom="10px">
              <Box textAlign="center">公众号</Box>
              <Box>
                <Image
                  boxSize="30px"
                  src={code1}
                  alt="logo"
                  mr="10px"
                  width="126px"
                  height="126px"
                />
              </Box>
            </Box>
            <Box fontSize="14px" color="#666" paddingBottom="10px">
              <Box textAlign="center">视频号</Box>
              <Box>
                <Image
                  boxSize="30px"
                  src={code2}
                  alt="logo"
                  mr="10px"
                  width="120px"
                  height="120px"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w="400px">
          <Box
            fontSize="22px"
            fontWeight="bold"
            color="#666"
            paddingBottom="30px"
          >
            新闻中心
          </Box>
          <Address />
        </Box>
      </Box>
      <Box bg="#2b2924">
        <Box padding="20px 80px" color="#fff">
          <Image
            boxSize="30px"
            borderRadius="10px"
            src={tb}
            alt="logo"
            mr="10px"
            width="50px"
            height="50px"
            display="inline-block"
          />
          <span>官方商城：</span>
          <Link href="https://shop259321701.taobao.com/?spm=a230r.7195193.1997079397.2.3f0b14778jz3dZ">
            派森乐园官方商城-淘宝网 (taobao.com)
          </Link>
        </Box>
      </Box>
      <Box
        bg="#444341"
        d="flex"
        padding="40px 80px"
        color="#fff"
        textAlign="center"
      >
        <Box w="33.3%">
          <Box fontSize="20px" paddingBottom="10px">
            企业愿景
          </Box>
          <Box fontSize="14px" paddingBottom="5px">
            打造科技创新教育产品国际优秀品牌
          </Box>
        </Box>
        <Box w="33.3%">
          <Box fontSize="20px" paddingBottom="10px">
            企业使命
          </Box>
          <Box fontSize="14px" paddingBottom="5px">
            为社会培养创新型人才助力！
          </Box>
          <Box fontSize="14px" paddingBottom="5px">
            为中国建设创新型社会赋能！
          </Box>
        </Box>
        <Box w="33.3%">
          <Box fontSize="20px" paddingBottom="10px">
            企业价值观
          </Box>
          <Box fontSize="14px" paddingBottom="5px">
            开拓创新 追求卓越
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
