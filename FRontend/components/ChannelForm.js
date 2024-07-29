import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const ChannelForm = ({ onSubscribe }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    console.log(data.message);
    onSubscribe(topic);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Enter topic to subscribe"
        variant="outlined"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Subscribe
      </Button>
    </Box>
  );
};

export default ChannelForm;
