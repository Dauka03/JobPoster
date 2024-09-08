# Job Posting Platform

## Overview

The Job Posting Platform is a web application that allows recruiters to create job postings and job seekers to apply for jobs. The application is built using modern web technologies and follows a structured approach to development.

## Technologies Used

- **Frontend**: React (Next.js), Material-UI
- **Backend**: Node.js, Express, Sequelize, PostgreSQL
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Containerization**: Docker

## Features

- **Job Listings**: View job postings with details including title, description, location, and salary.
- **Job Creation**: Recruiters can create new job postings.
- **Application Submission**: Job seekers can apply for jobs by submitting their resume and cover letter.
- **Authentication**: Login and registration functionalities for users.

## Running the Application

### Using Docker Compose

To run the application using Docker Compose, follow these steps:

1. **Ensure Docker and Docker Compose are installed on your machine.**

2. **Navigate to the root directory of the project (where `docker-compose.yml` is located):**

   ```bash
   cd JobPoster
   docker-compose up --build
## Running Without Docker
Navigate to the server directory:
### Running the Backend (Server)
cd /server
Install the server dependencies:
npm install
Start the server:
npm start

### Running the Frontend (Client)
cd /client
npm install
npm run dev
