import mqtt from 'mqtt';

const brokerUrl = process.env.MQTT_BROKER_URL;
const options = {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
};

let client;
const messages = {}; // Store messages in memory
const subscribedTopics = new Set(); // Track subscribed topics

const connectClient = () => {
    if (!client) {
        client = mqtt.connect(brokerUrl, options);
        client.on('connect', () => {
            console.log('Connected to MQTT Broker');
        });

        client.on('message', (topic, message) => {
            const timestamp = new Date().toISOString();
            const formattedMessage = {
                message: message.toString(),
                timestamp,
            };
            if (!messages[topic]) {
                messages[topic] = [];
            }
            messages[topic].push(formattedMessage);
            console.log(`Received message on ${topic}: ${message.toString()}`);
        });
    }
};

export default function handler(req, res) {
    connectClient();

    if (req.method === 'POST') {
        const { topic } = req.body;
        if (!subscribedTopics.has(topic)) {
            console.log(`Subscribing to topic: ${topic}`);
            client.subscribe(topic, (err) => {
                if (!err) {
                    subscribedTopics.add(topic);
                    res.status(200).json({ message: `Subscribed to topic ${topic}` });
                } else {
                    res.status(500).json({ message: 'Subscription failed' });
                }
            });
        } else {
            res.status(200).json({ message: `Already subscribed to topic ${topic}` });
        }
    } else if (req.method === 'GET') {
        const { topic } = req.query;
        console.log(`Fetching messages for topic: ${topic}`);
        res.status(200).json({ messages: messages[topic] || [] });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
