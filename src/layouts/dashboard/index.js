/* eslint-disable no-unused-vars */
/**
=========================================================
 * Argon Dashboard 2 MUI - v3.0.0
=========================================================

 * Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// Argon Dashboard 2 MUI components

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

function Default() {
  const [rpm, setRpm] = useState(null);
  const [voltage, setVoltage] = useState(null);
  const [S3, setS3] = useState(null);
  const [Vars, setVars] = useState(null);
  const [chartData, setChartData] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});
  const [chartData4, setChartData4] = useState({});
  const [pwm, setPwm] = useState(100);

  //axios.get('https://api.thingspeak.com/channels/1578993/feeds.json?api_key=YEL5BFGCUHKVGIN9&results=30')

  useEffect(() => {
    axios
      .get(
        "https://api.thingspeak.com/channels/1578993/fields/1.json?api_key=YEL5BFGCUHKVGIN9&results=30"
      )
      .then((response) => {
        const labels = [];
        const data = [];
        const data2 = [];
        const labels2 = [];
        const data3 = [];
        const labels3 = [];
        const data4 = [];
        const labels4 = [];
        axios
          .get(
            "https://api.thingspeak.com/channels/1578993/fields/2.json?api_key=YEL5BFGCUHKVGIN9&results=30"
          )
          .then((res) => {
            response.data.feeds.map((val) => {
              labels.push(val.field1);
              data.push(val.field1);
            });
            res.data.feeds.map((val) => {
              data2.push(val.field2);
              labels2.push(val.field2);
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });

            setChartData2({
              labels: labels2,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data2,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                // make beginAtZero = true to start chart from 0
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });

            // setChartData3({
            //   labels: labels3,
            //   datasets: [
            //     {
            //       label: "Distance",
            //       color: "info",
            //       data: data3,
            //     },
            //   ],

            //   // set min range of chart as 0 and step size as 500
            //   options: {
            //     // make beginAtZero = true to start chart from 0
            //     scales: {
            //       y: {
            //         beginAtZero: true,
            //         min: 0,
            //         max: 5000,
            //         ticks: {
            //           stepSize: 500,
            //         },
            //       },
            //     },
            //   },
            // });
          });

        axios
          .get(
            "https://api.thingspeak.com/channels/1578993/fields/3.json?api_key=YEL5BFGCUHKVGIN9&results=30"
          )
          .then((res) => {
            response.data.feeds.map((val) => {
              labels.push(val.field1);
              data.push(val.field1);
            });
            res.data.feeds.map((val) => {
              data3.push(val.field3);
              labels3.push(val.field3);
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });

            setChartData3({
              labels: labels3,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data3,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                // make beginAtZero = true to start chart from 0
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });

            // make a for loop for all elements in labels
            for (let i = 0; i < labels.length; i++) {
              if (labels[i] > 20) {
                labels4.push(1);
                data4.push(1);
              } else if (labels[i] <= 20 && labels2[i] > 10) {
                labels4.push(2);
                data4.push(2);
              } else {
                labels4.push(3);
                data4.push(3);
              }
            }

            setChartData4({
              labels: labels4,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data4,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                // make beginAtZero = true to start chart from 0
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });
          });
      });

    axios
      .get(
        "https://api.thingspeak.com/channels/1578993/fields/1.json?api_key=YEL5BFGCUHKVGIN9&results=1"
      )
      .then((res) => {
        setRpm(res.data.feeds[0].field1);
      });

    axios
      .get(
        "https://api.thingspeak.com/channels/1578993/fields/2.json?api_key=YEL5BFGCUHKVGIN9&results=1"
      )
      .then((res) => {
        setVoltage(res.data.feeds[0].field2);
      });

    axios
      .get(
        "https://api.thingspeak.com/channels/1578993/fields/3.json?api_key=YEL5BFGCUHKVGIN9&results=1"
      )
      .then((res) => {
        setS3(res.data.feeds[0].field3);
      });

    const labels4 = [];
    const data4 = [];

    if (rpm > 20) {
      labels4.push(1);
      data4.push(1);
    } else if (rpm <= 20 && voltage > 30) {
      labels4.push(2);
      data4.push(2);
    } else {
      labels4.push(3);
      data4.push(3);
    }

    // setChartData4({
    //   labels: labels4,
    //   datasets: [
    //     {
    //       label: "Distance",
    //       color: "info",
    //       data: data4,
    //     },
    //   ],

    //   // set min range of chart as 0 and step size as 500
    //   options: {
    //     // make beginAtZero = true to start chart from 0
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //         min: 0,
    //         max: 5000,
    //         ticks: {
    //           stepSize: 500,
    //         },
    //       },
    //     },
    //   },
    // });
  }, []);

  return (
    <DashboardLayout>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6} lg={1}></Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DetailedStatisticsCard
            title="Latest Distance from Sensor 1"
            count={rpm}
            icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DetailedStatisticsCard
            title="Latest Distance from Sensor 2"
            count={voltage}
            icon={{ color: "error", component: <i className="ni ni-world" /> }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DetailedStatisticsCard
            title="Latest Distance from Sensor 3"
            count={S3}
            icon={{ color: "error", component: <i className="ni ni-world" /> }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Ultrasound Sensor 1 Readings"
            // send options to chart
            //options={chartData.options}
            chart={chartData}
            // make chart begin at zero
            beginAtZero

            //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Ultrasound Sensor 2 Readings"
            // send options to chart
            //options={chartData.options}
            chart={chartData2}
            // make chart begin at zero
            beginAtZero={true}
            // use options from SetChartData
            options={chartData2.options}
            //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Ultrasound Sensor 3 Readings"
            // send options to chart
            //options={chartData.options}
            chart={chartData3}
            // make chart begin at zero
            beginAtZero={true}
            // use options from SetChartData
            options={chartData3.options}
            //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Direction of movement(1=straight, 2=left, 3=right)"
            // send options to chart
            //options={chartData.options}
            chart={chartData4}
            // make chart begin at zero
            beginAtZero={true}
            // use options from SetChartData
            options={chartData4.options}
            //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={6} lg={1}>
                    </Grid>
                    <Grid item>
                        <Box sx={{ width: 300, height: 15 }}>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={100}
                            step={5}
                            max={255}
                            marks={marks}
                            onChange={val => setPwm(val.target.value)}
                            valueLabelDisplay="on"
                        />
                        </Box>
                    </Grid>
                </Grid> */}
    </DashboardLayout>
  );
}

export default Default;
