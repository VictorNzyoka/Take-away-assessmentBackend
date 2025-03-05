# Assessment Backend API

This project is a backend API for managing assessments, built with **Node.js**, **Express**, and **MongoDB**. It allows you to create and retrieve assessments using a RESTful API.

## Features

- **Express Server:** A lightweight server to handle API requests.
- **MongoDB & Mongoose:** Connects to a MongoDB database to store assessment data.
- **CORS Support:** Configured to allow requests from any origin (ideal for development).
- **Custom Error Handling:** Uses middleware for asynchronous error handling and input validation.
- **Environment Variables:** Configured with dotenv for secure configuration.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [MongoDB](https://www.mongodb.com/) (local or cloud-hosted)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository:**

   git clone https://github.com/VictorNzyoka/Take-away-assessmentBackend.git
   cd Take-away-assessmentBackend

2. **Install dependancies:**
    npm install

3. **Enviroment Variables:**
    Create a .env file in the root directory and set the following variables:
    PORT=5000
    MONGO_URI="mongodb+srv://admin:*************@shapless-ecommerce.y2jde.mongodb.net/?retryWrites=true&w=majority&appName=Shapless-ecommerce"
    Replace the MONGO_URI with your MongoDB connection string if you're using a cloud-hosted database.

4. **Running the Server:**
    To start the server, run:
    npm start**
    You should see output similar to:
    Server running on port 5000
    MongoDB Connected

