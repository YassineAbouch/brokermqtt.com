import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { Paper, Typography, Box, Slider } from '@mui/material';

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c', '#d0ed57', '#8884d8'];

const DataPlot = ({ data, keys }) => {
    const [timeRange, setTimeRange] = useState([0, data.length]);

    const handleTimeRangeChange = (event, newValue) => {
        setTimeRange(newValue);
    };

    const filteredData = data.slice(timeRange[0], timeRange[1]);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString();
    };

    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6" component="h2">
                Data Plot
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Typography id="time-range-slider" gutterBottom>
                    Time Range
                </Typography>
                <Slider
                    value={timeRange}
                    onChange={handleTimeRangeChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="time-range-slider"
                    min={0}
                    max={data.length}
                    sx={{ width: '100%' }}
                />
            </Box>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={filteredData}
                    margin={{
                        top: 5, right: 50, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
                    <Tooltip labelFormatter={formatTimestamp} />
                    <Legend />
                    {keys.map((key, index) => (
                        <YAxis
                            key={key}
                            yAxisId={key}
                            orientation={index % 2 === 0 ? 'left' : 'right'}
                            stroke={colors[index % colors.length]}
                            width={40}
                            label={{ value: key, angle: -90, position: 'insideLeft', offset: 0 }}
                        />
                    ))}
                    {keys.map((key, index) => (
                        <Line
                            key={key}
                            yAxisId={key}
                            type="monotone"
                            dataKey={key}
                            stroke={colors[index % colors.length]}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                    <Brush dataKey="timestamp" height={30} stroke="#8884d8" tickFormatter={formatTimestamp} />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default DataPlot;
