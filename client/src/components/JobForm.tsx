// src/components/JobForm/JobForm.tsx
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography } from '@mui/material';
import { JobFormProps } from '@/types';

export default function JobForm({ onSubmit, initialValues }: JobFormProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  return (
    <Container>
      <Typography variant="h4">
        {initialValues ? 'Edit Job Posting' : 'Create Job Posting'}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('title')}
          label="Job Title"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          {...register('description')}
          label="Job Description"
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <TextField
          {...register('location')}
          label="Location"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          {...register('salary', {
            valueAsNumber: true // Преобразует значение в число
          })}
          label="Salary"
          type="number" // Устанавливаем тип поля на число
          fullWidth
          margin="normal"
          required
          InputProps={{
            inputProps: { min: 0 } // Устанавливаем минимальное значение для числа
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          {initialValues ? 'Update Job' : 'Post Job'}
        </Button>
      </form>
    </Container>
  );
}
