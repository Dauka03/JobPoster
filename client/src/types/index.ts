// src/types/index.ts
export interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    salary: string;
  }
  
  export interface JobFormProps {
    onSubmit: (data: Partial<Job>) => void;
    initialValues: Partial<Job> | null;
  }
  