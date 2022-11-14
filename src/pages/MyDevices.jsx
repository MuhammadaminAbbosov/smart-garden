import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

import Termometr from "../assets/icons/termometr.png";
import API from "../utils/API";

const MyDevices = () => {
  const [soilData, setSoilData] = useState([]);
  const [waterData, setWaterData] = useState([]);
  document.title = "Smart Garden | My Devices";
  const data01 = [
    { name: "Mineral o'g'itlar", value: 10 },
    { name: "Tuproq", value: 70 },
    { name: "Suv", value: 5 },
    { name: "Kislorod", value: 15 },
  ];

  useEffect(() => {
    API.get("/destination/soil-device/").then((res) => {
      setSoilData(res.data);
    });
    API.get("/destination/water-device/").then((res) => {
      setWaterData(res.data);
    });
  }, []);
  const data = [
    {
      name: "Iyun",
      uv: 50,
      amt: 2400,
    },
    {
      name: "Iyul",
      uv: 70,
      amt: 2210,
    },
    {
      name: "Avgust",
      uv: 50,
      amt: 2290,
    },
    {
      name: "Oktyabr",
      uv: 80,
      amt: 2000,
    },
    {
      name: "Sentyabr",
      uv: 75,
      amt: 2181,
    },
  ];
  return (
    <Wrapper>
      <div className="box">
        <b className="title">Tuproq uchun</b>
        {/* <div className="boxs">
          <b className="box-title">Tuproq Qurulmasi</b>
          <div className="box-content">
            <div className="progressBar">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#253A3A",
                  textColor: "#fff",
                  pathColor: "#C7E2C9",
                  trailColor: "transparent",
                })}
              />
            </div>
            <div className="temp">
              <div className="temp-top">
                <img src={Termometr} alt="" />
                <p>17°C</p>
              </div>
              <p>Tuproq tempraturasi</p>
            </div>
            <div className="content">
              <div className="wrapper">Auto</div>
              <p>SI Tahlili</p>
            </div>
          </div>
        </div> */}
        {soilData?.map((item, index) => {
          return (
            <div className="boxs" key={`box-` + index}>
              <b className="box-title">{item.name}</b>
              <div className="box-content">
                <div className="progressBar">
                  <CircularProgressbar
                    value={item.power_battery}
                    text={`${
                      item.power_battery ? item.power_battery + "%" : "No"
                    }`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#253A3A",
                      textColor: "#fff",
                      pathColor: "#C7E2C9",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="temp">
                  <div className="temp-top">
                    <img src={Termometr} alt="" />
                    <p>
                      {item.soil_temperature
                        ? item.soil_temperature + "°C"
                        : "No"}
                    </p>
                  </div>
                  <p>Tuproq tempraturasi</p>
                </div>
                <div className="content">
                  <div className="wrapper">Auto</div>
                  <p>SI Tahlili</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box">
        <b className="title">Suv sathi uchun</b>
        {/* <div className="boxs">
          <div className="box-title">Suv qurilmasi</div>
          <div className="box-content">
            <div className="progress">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              <p>Suv taqsimoti</p>
            </div>
            <div className="temp">
              <div className="temp-top">
                <img src={Termometr} alt="" />
                <p>17°C</p>
              </div>
              <p>Suv tempraturasi</p>
            </div>
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#06DFC2"
                    fill="rgba(154, 217, 226, 1)"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p>Suv Sathi</p>
            </div>
          </div>
        </div> */}
        {waterData?.map((item, index) => {
          return (
            <div className="boxs">
              <p className="box-title">{item.name}</p>
              <div className="box-content" key={"key" + index}>
                <div className="progress">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 0,
                        right: 30,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                  <p>Suv taqsimoti</p>
                </div>
                <div className="temp">
                  <div className="temp-top">
                    <img src={Termometr} alt="" />
                    <p>
                      {item.water_temperature
                        ? item.water_temperature + "°C"
                        : "No"}
                    </p>
                  </div>
                  <p>Suv tempraturasi</p>
                </div>
                <div className="chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#06DFC2"
                        fill="rgba(154, 217, 226, 1)"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p>Suv Sathi</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box">
        <b className="title">Tuproq ozuqaviyligi va tarkibi</b>
        <div className="chartC">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={120} height={120}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#F18718"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyDevices;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 0;
  gap: 10px;
  min-height: 100vh;
  background-color: #f3ede0;

  .progressBar {
    width: 110px;
    margin-left: 100px;
  }

  .box {
    .chartC {
      min-width: 200px;
      height: 140px;
    }
    .title {
      color: #243b3b;
      font-size: 18px;
      margin-bottom: 5px;
      display: block;
    }

    .box-content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
      /* padding: 0 20px; */

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .wrapper {
          height: 110px;
          width: 110px;
          background-color: #243b3b;
          color: white;
          font-weight: 700;
          font-size: 24px;

          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #c7e2c9;
        }
        p {
          text-align: center;
          color: #243b3b;
          letter-spacing: 1px;
        }
      }

      div {
        &.progress {
          height: 110px;

          p {
            text-align: center;
            color: #243b3b;
            letter-spacing: 1px;
          }
        }

        &.chart {
          width: 250px;
          height: 110px;

          p {
            text-align: center;
            color: #243b3b;
            letter-spacing: 1px;
          }
        }
      }

      .temp {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* gap: 10px; */

        .temp-top {
          display: flex;
          align-items: center;
          gap: 15px;

          img {
            width: 50px;
          }
        }

        p {
          color: #243b3b;
          letter-spacing: 1px;
        }
      }
    }

    .box-title {
      color: black;
      font-weight: 400;
      margin-left: 20px;
      margin-bottom: 15px;
    }
  }
`;
