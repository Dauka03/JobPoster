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
### Need setting database
1. Install PostgreSQL
Download and install PostgreSQL:

Go to the official PostgreSQL website and choose the installer for your operating system (Windows, macOS, Linux).
Follow the installation instructions:

Make sure to select the options to install PostgreSQL Server and pgAdmin (a database management tool).
2. Configure PostgreSQL
Start PostgreSQL:

Ensure that the PostgreSQL service is running. You can check this via pgAdmin or the command line.
Create a database and user:

Open pgAdmin or use the psql command line tool.
Using pgAdmin:

Open pgAdmin and log in.
Create a new database:
Right-click on "Databases" and select "Create" -> "Database...".
Enter the database name (db) and click "Save".
Create a new user:
Right-click on "Login/Group Roles" and select "Create" -> "Login/Group Role...".
Enter the username (postgres), set the password (123456789), and assign the necessary privileges.
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
   ```bash
   cd /server

Install the server dependencies:
   ```bash
   npm install

Start the server:
   ```bash
   npm start

### Running the Frontend (Client)
   ```bash
   cd /client
   npm install
   npm run dev
