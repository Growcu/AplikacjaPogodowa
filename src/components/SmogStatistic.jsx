/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

import {
    BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';

import '../styles/SmogStatistic.css';

const SmogStatistic = () => {
    const weatherToday = useSelector((store) => store.weatherToday);
    const { airPollution } = weatherToday;
    return (
        <div className="statistic">
            <h3>Smog</h3>
            <ResponsiveContainer>
                <BarChart data={airPollution}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar type="monotone" dataKey="uv" barSize={15} fill="#7100b8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default SmogStatistic;
