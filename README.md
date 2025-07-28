# Express.js & Realm Authentication Backend

This project provides a robust and secure authentication backend built with Express.js, leveraging MongoDB Realm for user management and MongoDB Atlas for data storage. It's designed to offer a comprehensive solution for user registration, login, and session management, with a focus on security and modern development practices using TypeScript.

## Table of Contents

-   [Express.js & Realm Authentication Backend](https://www.google.com/search?q=%23expressjs--realm-authentication-backend "null")
    
    -   [Introduction](https://www.google.com/search?q=%23introduction "null")
        
    -   [Features](https://www.google.com/search?q=%23features "null")
        
    -   [Technology Stack](https://www.google.com/search?q=%23technology-stack "null")
        
    -   [Project Structure](https://www.google.com/search?q=%23project-structure "null")
        
    -   [Getting Started](https://www.google.com/search?q=%23getting-started "null")
        
        -   [Prerequisites](https://www.google.com/search?q=%23prerequisites "null")
            
        -   [Installation](https://www.google.com/search?q=%23installation "null")
            
        -   [Environment Variables](https://www.google.com/search?q=%23environment-variables "null")
            
        -   [Running the Application](https://www.google.com/search?q=%23running-the-application "null")
            
    -   [API Endpoints](https://www.google.com/search?q=%23api-endpoints "null")
        
    -   [Authentication Flow](https://www.google.com/search?q=%23authentication-flow "null")
        
    -   [Detailed Explanation](https://www.google.com/search?q=%23detailed-explanation "null")
        
    -   [Contributing](https://www.google.com/search?q=%23contributing "null")
        

## Introduction

This project implements a secure backend for user authentication using Express.js for the API, MongoDB Realm for authentication services, and Mongoose for interacting with MongoDB Atlas. It demonstrates a complete flow for user registration, login, and logout, including the generation and handling of JSON Web Tokens (JWT) for session management. The entire codebase is written in TypeScript, ensuring type safety and improved maintainability.

## Features

-   **User Registration:** Securely register new users with hashed passwords.
    
-   **User Login:** Authenticate users and generate JWTs for session management.
    
-   **JWT-based Authentication:** Utilize JWTs for stateless authentication, enabling secure API access.
    
-   **User Logout:** Invalidate user sessions.
    
-   **MongoDB Realm Integration:** Seamlessly integrate with MongoDB Realm for backend services and authentication.
    
-   **MongoDB Atlas Integration:** Store user data in a scalable cloud database.
    
-   **TypeScript:** Full TypeScript support for enhanced code quality and developer experience.
    
-   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
    
-   **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
    
-   **`mongoose-bcrypt`:** For password hashing and comparison.
    

## Technology Stack

-   **Node.js:** JavaScript runtime.
    
-   **Express.js:** Web application framework for Node.js.
    
-   **TypeScript:** Programming language that builds on JavaScript by adding optional static type definitions.
    
-   **MongoDB Atlas:** Cloud-hosted MongoDB database for data persistence.
    
-   **MongoDB Realm:** Serverless platform for mobile and web applications, used here for authentication services.
    
-   **Mongoose:** ODM for MongoDB and Node.js.
    
-   **`mongoose-bcrypt`:** A Mongoose plugin for bcrypt password hashing.
    
-   **`jsonwebtoken`:** For creating and verifying JWTs.
    
-   **`dotenv`:** For loading environment variables from a `.env` file.
    
-   **`nodemon`:** For automatically restarting the Node.js application during development.
    

## Project Structure

The project is organized into logical directories:

-   `config/`: Configuration files (e.g., database connection settings).
    
-   `controllers/`: Contains the logic for handling API requests (e.g., registration, login).
    
-   `models/`: Defines Mongoose schemas for database collections (e.g., `User` model).
    
-   `mongodb-realm/`: Contains configurations and metadata related to the MongoDB Realm application.
    
    -   `application-0-evwty/server-utility/metadata`: Realm application metadata.
        
-   `routes/`: Defines API routes and links them to controller functions.
    
-   `.gitignore`: Specifies intentionally untracked files to ignore.
    
-   `app.ts`: The main application entry point, setting up Express and connecting to the database.
    
-   `package.json`: Project metadata and dependencies.
    
-   `package-lock.json`: Records the exact versions of dependencies.
    

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (LTS version recommended)
    
-   npm or yarn
    
-   A MongoDB Atlas account with a cluster set up.
    
-   A MongoDB Realm application linked to your MongoDB Atlas cluster.
    

### Installation

1.  **Clone the repository:**
    
    ```
    git clone https://github.com/AmmarAlmuain/express-and-realm-authentication.git
    cd express-and-realm-authentication
    
    ```
    
2.  **Install dependencies:**
    
    ```
    npm install
    # or
    yarn install
    
    ```
    

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
REALM_APP_ID=your_realm_app_id

```

-   `MONGO_URI`: Your connection string from MongoDB Atlas.
    
-   `JWT_SECRET`: A strong, random string used to sign your JWTs.
    
-   `REALM_APP_ID`: The App ID of your MongoDB Realm application.
    

### Running the Application

To run the application in development mode:

```
npm run dev
# or
yarn dev

```

This will start the Express server, typically on `http://localhost:5000` (or as configured). `nodemon` will automatically restart the server on code changes.

## API Endpoints

-   **`POST /api/auth/register`**: Register a new user.
    
    -   Request Body: `{ "username": "...", "email": "...", "password": "..." }`
        
-   **`POST /api/auth/login`**: Log in an existing user.
    
    -   Request Body: `{ "email": "...", "password": "..." }`
        
    -   Response: Includes a JWT token.
        
-   **`POST /api/auth/logout`**: Log out the current user. (Requires a valid JWT in the Authorization header).
    

## Authentication Flow

1.  **Registration:** A user sends their credentials to the `/api/auth/register` endpoint. The password is hashed using `mongoose-bcrypt` before being saved to MongoDB Atlas via Realm.
    
2.  **Login:** A user sends their email and password to the `/api/auth/login` endpoint. The provided password is compared with the stored hashed password. Upon successful authentication, a JWT is generated, signed with a secret key, and sent back to the client.
    
3.  **Protected Routes:** For accessing protected resources, the client includes the JWT in the `Authorization` header (e.g., `Bearer <token>`). The server verifies this token, and if valid, grants access.
    
4.  **Logout:** The client can trigger a logout, which typically involves clearing the JWT from the client-side storage.
    

## Detailed Explanation

For a more in-depth understanding of the project's implementation, including detailed code explanations, setup guides for MongoDB Atlas and Realm, and a step-by-step breakdown of the authentication process, please refer to the accompanying Medium article:

[Building a Secure Authentication with Express.js, Mongoose, Realm in TypeScript](https://medium.com/@AmmarAlmuain/building-a-secure-authentication-with-express-js-mongoose-realm-in-typescript-d8f1e442f31d "null")

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.
