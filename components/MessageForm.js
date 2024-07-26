import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const MessageForm = ({ topic }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic, message }),
    });
    const data = await res.json();
    console.log(data.message);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Enter message to publish"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Publish
      </Button>
    </Box>
  );
};

export default MessageForm;
