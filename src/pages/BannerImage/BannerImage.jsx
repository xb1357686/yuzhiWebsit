import { Image, Box } from "@chakra-ui/react";
import banner from "../../assets/banner.jpg";

function BannerImage() {
  return (
    <Box w="100%" h="">
      <Image src={banner} />
    </Box>
  );
}

export default BannerImage;
