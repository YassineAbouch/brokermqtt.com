import mqtt from 'mqtt';

const brokerUrl = process.env.MQTT_BROKER_URL;
const options = {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
};

const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
    console.log('Connected to MQTT Broker');
});

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { topic, message } = req.body;
        client.publish(topic, message, (err) => {
            if (!err) {
                res.status(200).json({ message: `Message sent to topic ${topic}` });
            } else {
                res.status(500).json({ message: 'Message sending failed' });
            }
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
