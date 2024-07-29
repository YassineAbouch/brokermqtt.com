import { useState } from 'react';
import Head from 'next/head';
import ChannelForm from '../components/ChannelForm';
import MessageForm from '../components/MessageForm';
import DataDisplay from '../components/DataDisplay';
import TopBar from '../components/TopBar';
import { Container, TextField, Box, Typography, Grid } from '@mui/material';

export default function Home() {
    const [topic, setTopic] = useState('');
    const [interval, setInterval] = useState(5000); // Default interval set to 5000 ms

    const handleIntervalChange = (e) => {
        const newInterval = parseInt(e.target.value, 10);
        if (!isNaN(newInterval) && newInterval > 0) {
            setInterval(newInterval);
        }
    };

    const handleSubscribe = (newTopic) => {
        setTopic(newTopic);
    };

    return (
        <Container>
            <Head>
                <title>MQTT Tester</title>
                <meta name="description" content="MQTT Broker Tester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopBar />
            <main>
                <Typography variant="h3" component="h1" gutterBottom>
                    MQTT Tester
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <ChannelForm onSubscribe={handleSubscribe} />
                        {topic && <MessageForm topic={topic} />}
                        <TextField
                            label="Enter fetch interval in ms"
                            variant="outlined"
                            type="number"
                            value={interval}
                            onChange={handleIntervalChange}
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {topic && <DataDisplay topic={topic} interval={interval} />}
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}
