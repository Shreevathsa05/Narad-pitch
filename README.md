# Project Narad

Project Narad is an AI-powered platform designed to transform government surveys. It leverages automation, multilingual support, and real-time insights to enable faster, richer, and more accurate data-driven policymaking. This repository contains the frontend application built with React and Vite.

## Features

*   **🤖 AI-Powered Survey Generation:** Automatically creates tailored surveys based on specified objectives, target demographics, and other parameters.
*   **📊 Interactive Analytics Dashboard:** Visualizes survey data with dynamic charts (using Recharts) and data filters for real-time insights into responses.
*   **📋 Question Bank Management:** Provides a full CRUD (Create, Read, Update) interface to manage, edit, and review survey questions fetched from the backend.
*   **📄 Context-Aware Generation:** Allows users to upload an existing question bank (as an `.xls` or `.xlsx` file) to provide context for the AI during new survey generation.
*   **📱 Responsive & Modern UI:** A clean, mobile-friendly interface built with Tailwind CSS for a seamless user experience across all devices.

## Pages Overview

*   **Home (`/`):** The landing page introducing the project's vision, core features, and links to the project's repositories.
*   **AI Generator (`/aigenerate`):** A comprehensive form to configure and generate a new survey question bank. Users can set parameters like survey objective, age group, region, and question types.
*   **Question Bank (`/questionbank`):** A CRUD interface for viewing and managing all questions in the database, interacting directly with the backend API.
*   **Analytics (`/analytics`):** A detailed dashboard displaying sample survey response data through various charts (bar, line, etc.) and a filterable raw data table.
*   **Survey Monitor (`/surveymonitor`):** A "Coming Soon" page for a future feature intended to monitor live survey campaigns across multiple platforms.

## Tech Stack

*   **Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **Charting:** Recharts
*   **File Handling:** [xlsx](https://www.npmjs.com/package/xlsx) for parsing Excel files.
*   **Icons:** React Icons

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Shreevathsa05/Narad-pitch.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Narad-pitch
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`: Runs the app in development mode with hot-reloading.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the source files using ESLint.
*   `npm run preview`: Serves the production build locally to preview the final app.

## Backend Repository

The AI logic, API endpoints, and server-side services for this project are located in a separate repository.

*   **Backend Repo:** [https://github.com/Shreevathsa05/Narad-Backend](https://github.com/Shreevathsa05/Narad-Backend)
