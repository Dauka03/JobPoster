// src/pages/jobs/[id].tsx
"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchJobDetails } from "@/services/jobService";

type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  createdAt: string;
};

export default function JobApplicationPage() {
  const router = useRouter();
  const [jobId, setJobId] = useState<string | undefined>();
  const [job, setJob] = useState<Job | null>(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const url = window.location.href;
    const id = url.split("/").pop(); // Получаем ID из URL
    const token = localStorage.getItem("token");
    setJobId(id);

    async function fetchJob() {
      try {
        const fetchedJob = await fetchJobDetails(id, token);
        setJob(fetchedJob);
      } catch (error) {
        console.error("Failed to fetch job details", error);
      }
    }

    if (id) {
      fetchJob();
    }
  }, []);

  const onSubmit = async (data: any) => {
    try {
      // Добавляем jobId к данным формы
      const applicationData = {
        ...data,
        jobId: parseInt(jobId, 10), // Передаем jobId
      };

      await axios.post(
        "http://localhost:5000/api/applications",
        applicationData
      );
      alert("Application submitted!");
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

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
      {job && (
        <Box mb={4}>
          <Typography variant="h4" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {job.description}
          </Typography>
          <Typography variant="body2">
            <strong>Location:</strong> {job.location}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Salary:</strong> ${job.salary}
          </Typography>
        </Box>
      )}
      <Typography variant="h5">Apply for Job</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("applicantName")}
          label="Full Name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          {...register("coverLetter")}
          label="Cover Letter"
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Application
        </Button>
      </form>
    </Container>
  );
}
