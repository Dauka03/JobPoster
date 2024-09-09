"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import JobForm from "@/components/JobForm";
import { createJob } from "../../services/jobService";
import { Button, Container } from "@mui/material";
import { Job } from "@/types";

export default function CreateJobPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Проверка токена при загрузке страницы
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    } else {
      router.push("/auth");
    }
  }, [router]);

  const handleJobSubmit = async (job: Job) => {
    if (token) {
      try {
        await createJob(job, token);
        router.push("/jobs");
      } catch (error) {
        console.error("Error creating job:", error);
        alert("Failed to create job");
      }
    } else {
      alert("Authentication required");
      router.push("/auth");
    }
  };

  if (token === null) {
    // Если токен не установлен, пока не загружаем форму
    return null;
  }

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/")}
        style={{ marginBottom: "16px" }}
      >
        Back to Home
      </Button>
      <JobForm onSubmit={handleJobSubmit} initialValues={null} />
    </Container>
  );
}
