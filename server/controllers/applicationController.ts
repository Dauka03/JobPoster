import { Request, Response } from "express";
import { Application } from "../models/application";

export const applyForJob = async (req: Request, res: Response) => {
  try {
    const { jobId, applicantName, coverLetter } = req.body;

    // Проверка на наличие всех нужных полей
    if (!jobId || !applicantName || !coverLetter) {
      return res.status(400).send("Missing required fields");
    }

    const application = await Application.create({
      jobId,
      applicantName,
      coverLetter,
    });

    res.status(201).json(application);
  } catch (error) {
    console.error("Error applying for job:", error); // Вывод полной ошибки в консоль
    res.status(500).send("Error applying for job");
  }
};
