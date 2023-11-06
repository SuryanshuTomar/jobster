# Jobster - MERN Stack Application

![Jobster Logo](path_to_logo.png)

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Description

Jobster is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to search and apply for jobs, as well as post job listings. The application provides a user-friendly interface for both job seekers and employers.

## Features

- User authentication and authorization
- Job search functionality
- Job posting for employers
- Application tracking for job seekers
- User profiles with customizable settings

## Demo

You can access a live demo of the application at [Demo Link](https://your-demo-link.com).

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
    ```
      git clone https://github.com/your-username/jobster.git
    ```

3. Navigate to the project directory:
    ```
      cd jobster
    ```

5. Install dependencies for both the server and client:
     ```
        cd server && npm install
        cd ../client && npm install
      ```

4. Set up environment variables:
- Create a `.env` file in the `server` directory and add the following variables:
  ```
  MONGO_URI=your_mongodb_uri
  SECRET_KEY=your_secret_key
  ```

5. Start the server and client:
- In the `server` directory, run:
  ```
  npm start
  ```
- In the `client` directory, run:
  ```
  npm start
  ```

6. Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

- Create an account or log in to access the full functionality of the application.
- As a job seeker, you can search for jobs, view job details, and apply for positions.
- As an employer, you can post new job listings and view applications from job seekers.

## Technologies

- Frontend: React.js, HTML5, CSS3, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Other libraries and dependencies: React Router Dom
