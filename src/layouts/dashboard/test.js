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
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

// Argon Dashboard 2 MUI components

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

function Default() {
    const [rpm, setRpm] = useState(null);
    const [voltage, setVoltage] = useState(null);
    const [chartData, setChartData] = useState({});
    const [pwm, setPwm] = useState(100);

    const marks = [
        {
            value: 0,
            label: '0 RPM',
        },
        {
            value: 255,
            label: '255 RPM',
        },
    ];

        //axios.get('https://api.thingspeak.com/channels/1839559/feeds.json?api_key=N11LTANIFU3RSH5N&results=30')

    useEffect(() => {
        axios.get('https://api.thingspeak.com/channels/1839559/fields/1.json?api_key=N11LTANIFU3RSH5N&results=30')
            .then(response => {
                axios.get('https://api.thingspeak.com/channels/1839559/fields/2.json?api_key=N11LTANIFU3RSH5N&results=30')
                    .then(res => {
                        const labels = []
                        const data = []
                        response.data.feeds.map(val => {
                            labels.push(val.field1);
                        })
                        res.data.feeds.map(val => {
                            data.push(val.field2);
                        })

                        setChartData({
                            labels: labels,
                            datasets: [{
                                label: "RPM",
                                color: "info",
                                data: data,
                            },],
                        })
                    })
            })

        axios.get('https://api.thingspeak.com/channels/1839559/fields/1.json?api_key=N11LTANIFU3RSH5N&results=1')
            .then(res => {
                setRpm(res.data.feeds[0].field1);
            })

        axios.get('https://api.thingspeak.com/channels/1839559/fields/2.json?api_key=N11LTANIFU3RSH5N&results=1')
            .then(res => {
                setVoltage(res.data.feeds[0].field2);
            })
    }, [])

    useEffect(() => {
        console.log(pwm)
        axios.get('https://api.thingspeak.com/update?api_key=0LGM5L2SXPUYD8QQ&field1=' + pwm)
            .then(response => {
                console.log("value changed")
                console.log(response.status)
            })
    }, [pwm])

    return (
        <DashboardLayout>
                <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={6} lg={1}>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DetailedStatisticsCard
                        title="Latest RPM"
                        count={rpm}
                        icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DetailedStatisticsCard
                        title="Latest Voltage"
                        count={voltage}
                        icon={{ color: "error", component: <i className="ni ni-world" /> }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={6} lg={1}>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <GradientLineChart
                        title="RPM vs Voltage"
                        chart={chartData}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} mb={3}>
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
                </Grid>
        </DashboardLayout>
    );
}

export default Default;