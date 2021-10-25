import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Image, Link, Box } from "@chakra-ui/react";
import newsListPng from "../../assets/newsList.jpg";

// mock 地址 ： www.fastmock.site  账号密码： rock / qwer123456

function NewsList() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(
        "https://www.fastmock.site/mock/5354fbda36a6ad4f66a1e26d32d80a80/news/api/getNews"
      )
      .then((res) => {
        setNewsList(res.data);
      });
  };

  return (
    <Box m="0 auto" bg="#fafafb" maxWidth="1167px" mt="80px">
      <Box>
        <Image src={newsListPng} />
      </Box>
      {newsList.map((item, index) => {
        return (
          <Link href={item.link} target="_blank" key={index}>
            <Box
              marginBottom="30px"
              d="flex"
              padding="40px"
              borderRadius="15px"
              bg="#ffffff"
              boxShadow="0 -0.1rem 0.6rem 0 rgb(150 170 218 / 10%)"
            >
              <Box w="25%">
                <Image
                  src={item.newImage}
                  height="200px"
                  borderRadius="15px"
                ></Image>
              </Box>
              <Box w="70%" marginLeft="auto">
                <Box color="#333333" fontWeight="bold" fontSize="24px">
                  {item.newsTitle}
                </Box>
                <Box color="#999" paddingTop="10px" lineHeight="30px">
                  {item.dec}
                </Box>
                <Box paddingTop="10px" color="#f44">
                  {item.source}
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}

export default NewsList;
