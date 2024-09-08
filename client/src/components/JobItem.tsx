// src/components/JobItem/JobItem.tsx
import { Job } from '@/types';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

interface JobItemProps {
  job: Job;
}

export default function JobItem({ job }: JobItemProps) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography>{job.description}</Typography>
        <Typography>Location: {job.location}</Typography>
        <Typography>Salary: {job.salary}</Typography>
        <Link href={`/jobs/${job.id}`} passHref>
          <Button variant="contained" color="primary">
            Apply
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
