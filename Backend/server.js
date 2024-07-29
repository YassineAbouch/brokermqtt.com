const express = require('express');
const mqtt = require('mqtt');
const app = express();
const port = 3000;

const brokerUrl = 'mqtt://54.197.132.147'; // mqtt brokers
const options = {
    username: '',
    password: '',
};

const client = mqtt.connect(brokerUrl, options);

app.use(express.json());

client.on('connect', () => {
    console.log('Connected to MQTT Broker');
});

app.post('/create-channel', (req, res) => {
    const { topic } = req.body;
    client.subscribe(topic, (err) => {
        if (!err) {
            res.send(`Subscribed to topic ${topic}`);
        } else {
            res.status(500).send('Subscription failed');
        }
    });
});

app.post('/send-message', (req, res) => {
    const { topic, message } = req.body;
    client.publish(topic, message, (err) => {
        if (!err) {
            res.send(`Message sent to topic ${topic}`);
        } else {
            res.status(500).send('Message sending failed');
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Received message from ${topic}: ${message.toString()}`);
});

app.listen(port, () => {
    console.log(`MQTT Tester app listening at http://localhost:${port}`);
});
