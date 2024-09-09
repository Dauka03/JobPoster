"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Pagination } from "@mui/material";
import { getJobs } from "../../services/jobService";
import JobList from "@/components/JobList";
import { Job } from "@/types";

export default function JobListPage() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPage] = useState<number>(5); // Количество элементов на странице

  const totalPages = Math.ceil(allJobs.length / jobsPerPage);
  const router = useRouter();

  useEffect(() => {
    async function fetchJobs() {
      try {
        const fetchedJobs = await getJobs();
        // Сортируем вакансии по дате создания (от новых к старым)
        const sortedJobs = fetchedJobs.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setAllJobs(sortedJobs);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      }
    }

    fetchJobs();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToDisplay = allJobs.slice(startIndex, endIndex);

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
      <JobList jobs={jobsToDisplay} />
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
}
