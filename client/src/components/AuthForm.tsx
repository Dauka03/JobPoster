'use client';

import { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { login } from '@/services/authService';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await login(email, password);
      localStorage.setItem('token', token); // Сохранение токена
      localStorage.setItem('email', email);
      router.push('/'); // Перенаправление на страницу после успешного логина
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
        //   type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
}
