import { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper, TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Checkbox, ListItemIcon } from '@mui/material';
import DataPlot from './DataPlot';
import { CSVLink } from 'react-csv';

const DataDisplay = ({ topic, interval }) => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [lastReceived, setLastReceived] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [jsonKeys, setJsonKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [plotData, setPlotData] = useState([]);
  const [recordedData, setRecordedData] = useState([]);
  const [sessionDuration, setSessionDuration] = useState(0);

  const textSize = process.env.NEXT_PUBLIC_MESSAGE_TEXT_SIZE || 'body1'; // Default to 'body1' if not set

  useEffect(() => {
    const fetchMessages = async () => {
      console.log(`Fetching messages for topic: ${topic}`);
      const res = await fetch(`/api/subscribe?topic=${topic}`);
      const data = await res.json();
      setMessages(data.messages);
      setFilteredMessages(data.messages);
      if (data.messages.length > 0) {
        setLastReceived(data.messages[data.messages.length - 1].timestamp);
        extractJsonKeys(data.messages);
        updatePlotData(data.messages, selectedKeys);
      }
      console.log(`Fetched messages:`, data.messages); // Debug log
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, interval); // Fetch new messages based on the interval

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [topic, interval, selectedKeys]);

  useEffect(() => {
    const durationInterval = setInterval(() => {
      setSessionDuration(prevDuration => prevDuration + 1);
    }, 1000); // Increment session duration every second

    return () => clearInterval(durationInterval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    setFilteredMessages(
      messages.filter((msg) =>
        msg.message.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, messages]);

  const extractJsonKeys = (messages) => {
    const keysSet = new Set();
    messages.forEach((msg) => {
      try {
        const json = JSON.parse(msg.message);
        Object.keys(json).forEach((key) => keysSet.add(key));
      } catch (e) {
        // Ignore non-JSON messages
      }
    });
    setJsonKeys(Array.from(keysSet));
  };

  const handleKeyChange = (event) => {
    const value = event.target.value;
    setSelectedKeys(value);
    updatePlotData(messages, value);
  };

  const updatePlotData = (messages, keys) => {
    if (!keys.length) return;
    const dataForPlot = messages.map((msg) => {
      try {
        const json = JSON.parse(msg.message);
        const dataPoint = { timestamp: msg.timestamp };
        keys.forEach(key => {
          dataPoint[key] = json[key];
        });
        return dataPoint;
      } catch (e) {
        return null;
      }
    }).filter((data) => data !== null);
    setPlotData(dataForPlot);
  };

  const handleRecordData = () => {
    setRecordedData(plotData);
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Button variant="contained" fullWidth>
            Total Messages Received: {messages.length}
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" fullWidth>
            Last Message Received: {lastReceived || 'N/A'}
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" fullWidth>
            Session Duration: {sessionDuration} seconds
          </Button>
        </Grid>
      </Grid>
      <TextField
        label="Search Messages"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Paper elevation={3} sx={{ p: 2, height: '400px', overflowY: 'scroll' }}>
        <Typography variant="h5" component="h2">
          Messages for topic: {topic}
        </Typography>
        <List>
          {filteredMessages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${msg.timestamp}: ${msg.message}`}
                primaryTypographyProps={{ variant: textSize }} // Use environment variable for text size
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      {jsonKeys.length > 0 && (
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Select Variables to Plot</InputLabel>
          <Select
            multiple
            value={selectedKeys}
            onChange={handleKeyChange}
            renderValue={(selected) => selected.join(', ')}
          >
            {jsonKeys.map((key) => (
              <MenuItem key={key} value={key}>
                <ListItemIcon>
                  <Checkbox checked={selectedKeys.indexOf(key) > -1} />
                </ListItemIcon>
                <ListItemText primary={key} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {plotData.length > 0 && <DataPlot data={plotData} keys={selectedKeys} />}
      <Button variant="contained" color="primary" onClick={handleRecordData} sx={{ mt: 2 }}>
        Record Data
      </Button>
      {recordedData.length > 0 && (
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          <CSVLink data={recordedData} filename={"recorded-data.csv"} style={{ textDecoration: 'none', color: 'white' }}>
            Download Recorded Data
          </CSVLink>
        </Button>
      )}
    </Box>
  );
};

export default DataDisplay;
