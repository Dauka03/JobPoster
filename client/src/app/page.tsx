// src/app/page.js
"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; // Убедитесь, что файл стилей доступен
import { useRouter } from "next/navigation";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(); // Используем контекст авторизации
  const router = useRouter();

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, [isAuthenticated]);
  // Пример хука для управления состоянием
  const handleLogin = () => {
    router.push("/auth"); // Переход на страницу логина
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Вызов функции выхода
    setIsAuthenticated(false);
    router.push("/"); // Переход на главную после выхода
  };

  return (
    <Container className={styles.page} maxWidth="md">
      <Box textAlign="center" mt={4}>
        <Image
          className={styles.logo}
          src="/path/to/your/logo.svg" // Замените на путь к вашему логотипу
          alt="Job Posting Platform Logo"
          width={180}
          height={38}
          priority
        />
        <Typography variant="h4" gutterBottom>
          Welcome to the Job Posting Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Create job postings or explore job listings. This platform helps
          recruiters post job opportunities and job seekers find and apply for
          jobs.
        </Typography>
        <Box mt={2}>
          <Link href="/recruiter" passHref>
            <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
              Create Job Posting
            </Button>
          </Link>
          <Link href="/jobs" passHref>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginRight: 2 }}
            >
              View Job Listings
            </Button>
          </Link>
          {isAuthenticated ? (
            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}
