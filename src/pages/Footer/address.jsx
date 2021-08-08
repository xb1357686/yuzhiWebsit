import React, { Component } from "react";
import { Map, Marker } from "react-amap";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function Address() {
  const [mapState, setMapState] = useState({
    mapZoom: 15, //地图缩放等级 （zoom）
    //https://lbs.amap.com/api/javascript-api/guide/abc/prepare这里有介绍key怎么申请
    mapKey: "1234567809843asadasd", //Key就不贴出来了奥
    status: {
      zoomEnable: false,
      dragEnable: false,
    },
    mapCenter: [113.959204, 22.585642], //地图中心点
    mapMake: [113.959204, 22.585642], //marker标记点
  });

  return (
    <Box w="100%" h="270px">
      <Map
        amapkey={mapState.mapKey}
        center={mapState.mapCenter}
        zoom={mapState.mapZoom}
        status={mapState.status}
      >
        {/*marker标记点创建必有参数 （position中心点）*/}
        <Marker
          position={mapState.mapMake}
          label={{
            // 设置文本标注偏移量
            //   offset: new AMap.Pixel(20, 20),
            // 设置文本标注内容
            content: "<div >未来科城先进制造产业园</div>",
            // 设置文本标注方位
            direction: "top",
          }}
        />
      </Map>
    </Box>
  );
}

export default Address;
