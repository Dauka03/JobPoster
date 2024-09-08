import { Request, Response } from "express";
import { Job } from "../models/job";

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    console.error(error); // Логирование ошибки
    res.status(500).send("Error fetching jobs");
  }
};
export const getJobById = async (req: Request, res: Response) => {
  try {
    const jobId = parseInt(req.params.id, 10); // Извлечение ID из параметров запроса
    if (isNaN(jobId)) {
      return res.status(400).send("Invalid job ID");
    }

    const job = await Job.findByPk(jobId); // Поиск работы по первичному ключу (ID)

    if (job) {
      res.json(job); // Возвращаем найденную работу
    } else {
      res.status(404).send("Job not found"); // Если работа не найдена, возвращаем 404
    }
  } catch (error) {
    console.error(error); // Логирование ошибки
    res.status(500).send("Error fetching job");
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, description, location, salary } = req.body;

    // Простейшая валидация данных
    if (!title || !description || !location || typeof salary !== "number") {
      return res.status(400).send("Invalid data");
    }

    const job = await Job.create({ title, description, location, salary });
    res.status(201).json(job);
  } catch (error) {
    console.error(error); // Логирование ошибки
    res.status(500).send("Error creating job");
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const jobId = parseInt(req.params.id, 10);
    const { title, description, location, salary } = req.body;

    // Простейшая валидация данных
    if (!title || !description || !location || typeof salary !== "number") {
      return res.status(400).send("Invalid data");
    }

    const [updated] = await Job.update(
      { title, description, location, salary },
      { where: { id: jobId } }
    );

    if (updated) {
      const updatedJob = await Job.findByPk(jobId);
      res.json(updatedJob);
    } else {
      res.status(404).send("Job not found");
    }
  } catch (error) {
    console.error(error); // Логирование ошибки
    res.status(500).send("Error updating job");
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const jobId = parseInt(req.params.id, 10);
    const deleted = await Job.destroy({ where: { id: jobId } });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send("Job not found");
    }
  } catch (error) {
    console.error(error); // Логирование ошибки
    res.status(500).send("Error deleting job");
  }
};
