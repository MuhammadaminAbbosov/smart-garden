import React from "react";
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
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

import Termometr from "../assets/icons/termometr.png";

const percentage = 66;
const MyDevices = () => {
  document.title = "Smart Garden | My Devices";
  const data01 = [
    { name: "Mineral o'g'itlar", value: 10 },
    { name: "Tuproq", value: 70 },
    { name: "Suv", value: 5 },
    { name: "Kislorod", value: 15 },
  ];

  const data = [
    {
      name: "Page A",
      uv: 50,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 70,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 50,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 80,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 75,
      amt: 2181,
    },
  ];
  return (
    <Wrapper>
      <div className="box">
        <b className="title">Tuproq uchun</b>
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
      </div>
      <div className="box">
        <b className="title">Suv sathi uchun</b>
        <div className="box-content">
          <div className="progress">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
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
                outerRadius={70}
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
  padding: 20px 30px 0;
  gap: 10px;

  .progressBar {
    width: 120px;
  }

  .box {
    .chartC {
      min-width: 200px;
      height: 160px;
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
      padding: 0 20px;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .wrapper {
          height: 120px;
          width: 120px;
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
          height: 120px;

          p {
            text-align: center;
            color: #243b3b;
            letter-spacing: 1px;
          }
        }

        &.chart {
          width: 250px;
          height: 120px;

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
  }
`;
