import { Box, Typography, Paper } from '@mui/material';

const StatsWidget = ({ messageCount, lastReceived }) => {
    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            <Box>
                <Typography variant="h6">Total Messages Received: {messageCount}</Typography>
                <Typography variant="h6">Last Message Received: {lastReceived ? new Date(lastReceived).toLocaleString() : 'N/A'}</Typography>
            </Box>
        </Paper>
    );
};

export default StatsWidget;
