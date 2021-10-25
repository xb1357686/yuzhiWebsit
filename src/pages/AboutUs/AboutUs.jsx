import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import CompanyProfile from "./CompanyProfile";
// import Contact from "./Contact";
// import Mission from "./mission";
import "./index.css";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutNav: [
        {
          id: 1,
          name: "公司简介",
        },
        {
          id: 2,
          name: "联系我们",
        },
        // {
        //   id: "3",
        //   name: "联系我们",
        // },
      ],
      aboutNavID: 1,
    };
  }
  aboutClict = (i) => {
    this.setState({
      aboutNavID: i,
    });
  };

  render() {
    const { aboutNavID, aboutNav } = this.state;
    return (
      <Box pt="90px">
        {/* <Box bg="#fff" padding="20px 0">
          <Box
            padding="0 80px"
            d="flex"
            w="1300px"
            margin="0 auto"
            justifyContent="space-around"
            flexDirection="row"
          >
            {aboutNav.map((item, index) => {
              return (
                <Box
                  key={index}
                  cursor="pointer"
                  onClick={() => this.aboutClict(item.id)}
                  className={aboutNavID === item.id ? "name" : ""}
                  fontSize="20px"
                >
                  {item.name}
                </Box>
              );
            })}
          </Box>
        </Box> */}
        {/* {aboutNavID === 1 && <CompanyProfile />} */}
        {/* {aboutNavID === 2 && <Mission />} */}
        {/* {aboutNavID === 3 && <Contact />} */}
        <CompanyProfile />
      </Box>
    );
  }
}
