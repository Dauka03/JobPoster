// src/components/JobList/JobList.tsx
import { Job } from '@/types';
import { Container, Typography } from '@mui/material';
import JobItem from './JobItem';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <Container>
      <Typography variant="h4">Job Listings</Typography>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </Container>
  );
}
