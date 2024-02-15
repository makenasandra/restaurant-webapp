# CHAI VENINA App - Getting Started Documentation

## Introduction

Welcome to the CHAI VENINA app! This documentation will guide you through the process of setting up and running the application. The CHAI VENINA app is a simple web application built with React on the frontend and Flask on the backend.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your machine:

- Node.js and npm (Node Package Manager) - You can download them from the official Node.js website (https://nodejs.org).
- Python - You can download it from the official Python website (https://www.python.org).

## Installation and Setup

### Frontend (React)

1. Clone the Repository: 
   - Open your terminal and navigate to the desired directory.
   - Run the following command, replacing `[repository-url]` with the SSH key of the repository:
     ```
     git clone [repository-url]
     ```

2. Install Dependencies:
   - Navigate to the `client/vevinah` directory using the terminal:
     ```
     cd client/vevinah
     ```
   - Run the following command to install the necessary dependencies:
     ```
     npm install
     ```

3. Start the Application:
   - Run the following command to start the React development server:
     ```
     npm start
     ```
   - Note: The first attempt to start the application might fail, but the error message will specify the missing dependencies.
   - Copy the name of the missing dependency from the error message.
   - Run the following command to install the missing dependency:
     ```
     npm install [missing-dependency-name]
     ```
   - Repeat the process of running `npm start` after each successful installation until the application starts successfully.

### Backend (Flask)

1. Navigate to the root directory:
   - If you are not already in the project's root directory, navigate to it using the terminal.

2. Install Backend Dependencies:
   - Run the following command to install the Flask dependencies:
     ```
     npm install --prefix client
     ```

3. Run Database Migrations:
   - Navigate to the `veninah-server` directory using the terminal:
     ```
     cd veninah-server
     ```
   - Run the following command to apply database migrations:
     ```
     flask db upgrade
     ```

4. Seed the Database:
   - Run the following command to seed the database with initial data:
     ```
     python seed.py
     ```

5. Start the Backend Server:
   - Run the following command to start the Flask server:
     ```
     flask run
     ```
   - Note: Similar to the frontend, the first attempt might fail due to missing dependencies.
   - Follow the process of installing the missing dependencies and running `flask run` again until the server starts successfully.

## Conclusion

Congratulations! You have successfully set up and started the CHAI VENINA app. Now you can access the application in your browser and explore its features. If you encounter any issues or have any questions, please refer to the project's documentation or reach out to the project maintainers for assistance.

Happy exploring and enjoy using the CHAI VENINA app!
