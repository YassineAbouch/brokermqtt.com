import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const TopBar = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    const handleLogout = () => {
        signOut();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MQTT Tester
                </Typography>
                {session ? (
                    <>
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                            {session.user.email}
                        </Typography>
                        <IconButton color="inherit" onClick={handleLogout}>
                            <AccountCircle />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Link href="/login" passHref>
                            <Button color="inherit">Login</Button>
                        </Link>
                        <Link href="/register" passHref>
                            <Button color="inherit">Register</Button>
                        </Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
