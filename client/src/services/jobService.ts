// src/services/jobService.ts
import { Job } from "@/types";
import axios from "axios";

export const getJobs = async () => {
  const response = await axios.get<Job[]>("http://localhost:5000/api/jobs");
  return response.data;
};

export const createJob = async (job: Partial<Job>, token: string) => {
  await axios.post("http://localhost:5000/api/jobs", job, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const fetchJobDetails = async (id: string, token: string) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching job details:", error);
  }
};
export const updateJob = async (
  id: number,
  job: Partial<Job>,
  token: string
) => {
  await axios.put(`http://localhost:5000/api/jobs/${id}`, job, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteJob = async (id: number, token: string) => {
  await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
