import { Heading, Box } from "@chakra-ui/react";

function Content({ title, children, bgUrl }) {
  return (
    <Box bg={`url(${bgUrl})`}>
      <Box w="1160px" p="20px 0" alignItems="center" m="0 auto" color="#fff">
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
        <Box alignItems="center" bg="#00bbff" w="171px" h="5px" m="50px auto" />
        {children}
      </Box>
    </Box>
  );
}

export default Content;
