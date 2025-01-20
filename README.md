# Industries Dashboard API
## Overview
The **Industries Dashboard API** is a RESTful API developed with Node.js, Express, and TypeScript. It provides a centralized backend solution for managing and serving data related to industries in a structured and efficient way. With features such as middleware for parsing requests and Gzip compression for optimized performance, this API is built to handle requests efficiently and flexibly.
## Features
- **Environment Configuration**: Uses `dotenv` for environment variable management.
- **Gzip Compression**: Improves API performance by reducing response payload size using the `compression` middleware.
- **Modular Routing**: Organized routing with version control (e.g., `/v1` endpoint structure).
- **TypeScript Integration**: Ensures fully typed, maintainable, and scalable code.
- **Testing**: Includes setup for unit and integration tests using `jest`, `ts-jest`, and `supertest`.
- **Dockerized Environment**: Complete setup for running the application in containers, ensuring consistency and ease of deployment.

## Prerequisites
Ensure you have the following installed:
- [Docker]()
- [Docker Compose]()

## Installation and Setup
### Using Docker
The application is fully containerized with Docker. Follow these steps to build and run the application:
1. Clone the repository:
``` bash
   git clone <repo-url>
   cd industries-dashboard-api
```
2. Build and start the Docker container:
``` bash
   docker-compose up -d --build
```
3. Access the API:
``` 
   http://localhost:8000/v1
```
## Environment Variables
This project uses environment variables to configure runtime behavior. These can be specified in a `.env` file in the root directory or directly in the `docker-compose.yml` configuration.
Example `.env`:
``` env
PORT=8000
```
The default port is `8000`, but you can adjust it in the `.env` file or by editing the `docker-compose.yml`.
## Testing
To run the tests for this project, you'll still use npm commands. Run the following:
``` bash
npm test
```

## Docker Configuration
The application uses Docker for a containerized setup,
When you want to run the project:
1. Build and start the container:
``` bash
   docker-compose up -d --build
```
## API Endpoints
### Base URL
The API server will be available at:
``` 
http://localhost:8000/v1
```
### Example Endpoints

| Endpoint | Method | Description |
| --- | --- | --- |
| `/v1/data` | GET | Fetches all industry data |


## Dependencies

| Dependency | Version | Description |
| --- | --- | --- |
| express | ^4.21.2 | Web framework for building REST APIs |
| compression | ^1.7.5 | Middleware for Gzip compression |
| dotenv | ^16.4.7 | Manages environment variables |
### Dev Dependencies

| Dev Dependency | Version | Description |
| --- | --- | --- |
| jest | ^29.7.0 | Testing framework |
| ts-jest | ^29.2.5 | Jest preset for TypeScript |
| supertest | ^7.0.0 | HTTP assertions and REST API testing |
| typescript | ^5.7.3 | TypeScript compiler |
| nodemon | ^3.1.9 | Automatically restarts server on changes |
