import React, { Component } from 'react';
import {Map,Marker} from 'react-amap';

class adderss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapZoom: 15, //地图缩放等级 （zoom）
            //https://lbs.amap.com/api/javascript-api/guide/abc/prepare这里有介绍key怎么申请
            mapKey: '1234567809843asadasd',//Key就不贴出来了奥
            status: {
                zoomEnable: false,
                dragEnable: false,
            },
            mapCenter:[113.959204, 22.585642],//地图中心点
            mapMake :[113.959204, 22.585642],//marker标记点
        };
    }

    render() {
        let {mapCenter, mapMake, mapZoom, mapKey, status} = this.state;
        return <div style={{width:'100%',height:'270px'}}>
            {/*地图创建必有参数 （key，中心点，zoom等级）*/}
            <Map amapkey={mapKey} center={mapCenter} zoom={mapZoom} status={status}>
                {/*marker标记点创建必有参数 （position中心点）*/}
                <Marker position={mapMake}   label={{
              // 设置文本标注偏移量
            //   offset: new AMap.Pixel(20, 20),
              // 设置文本标注内容
              content: "<div >未来科城先进制造产业园</div>",
              // 设置文本标注方位
              direction: 'top'
            }}/>
            </Map>
        </div>
    }
}

export default adderss;
