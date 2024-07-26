import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (res.ok) {
            alert('Login successful');
            router.push('/');
        } else {
            alert(res.error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="h4">Login</Typography>
                <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    <Box sx={{ mt: 2 }}>
                        <Link href="/register" variant="body2">
                            Don't have an account? Register
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
