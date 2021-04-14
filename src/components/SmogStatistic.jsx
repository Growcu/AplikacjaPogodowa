/* eslint-disable arrow-body-style */
import React from 'react';

import {
    BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';

import '../styles/SmogStatistic.css';

const data = [
    {
        name: 'A',
        uv: 500,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'B',
        uv: 200,
        pv: 2800,
        amt: 2800,
    },
    {
        name: 'C',
        uv: 400,
        pv: 2800,
        amt: 2800,
    },
    {
        name: 'D',
        uv: 100,
        pv: 2800,
        amt: 2800,
    },
];

const renderLineChart = (
    <ResponsiveContainer>
        <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar type="monotone" dataKey="uv" barSize={20} fill="#7100b8" />
        </BarChart>
    </ResponsiveContainer>
);
const SmogStatistic = () => {
    return (
        <div className="statistic">
            <h3>Smog</h3>
            {renderLineChart}
        </div>
    );
};
export default SmogStatistic;
