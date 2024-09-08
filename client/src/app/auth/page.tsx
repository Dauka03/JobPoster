'use client';

import AuthForm from '@/components/AuthForm';
import { useRouter } from 'next/navigation';
import { Button, Container, Typography } from '@mui/material';

export default function AuthPage() {
  const router = useRouter();

  const handleSomeAction = () => {
    router.push('/register');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Authentication
      </Typography>
      <AuthForm />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSomeAction}
        style={{ marginTop: '16px' }} // Отступ сверху
      >
        Go to Register
      </Button>
    </Container>
  );
}
