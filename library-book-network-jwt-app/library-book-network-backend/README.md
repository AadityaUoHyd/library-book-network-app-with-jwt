# Library Book Network - Backend

## Overview

The backend of the Library Book Network project is responsible for handling all server-side operations, including user authentication, book management, and API endpoints. This section provides an overview of the backend architecture, technologies used, and setup instructions.

## Technologies Used

Spring Boot 3: A powerful framework for building Java-based applications.
Spring Security 6: Provides authentication and authorization mechanisms for securing the application.
JWT Token Authentication: Ensures secure communication between the client and server.
Spring Data JPA: Simplifies data access and persistence using the Java Persistence API.
JSR-303 and Spring Validation: Enables validation of objects based on annotations.
OpenAPI and Swagger UI Documentation: Generates documentation for the API endpoints.
Docker: Facilitates containerization of the backend application for deployment.
Setup Instructions
To set up the backend of the Library Book Network project, follow these steps:

## How to run backend:

- Clone the repository:
git clone https://github.com/AadityaUoHyd/library-book-network-app.git

- Run the docker-compose file
docker-compose up -d

- Navigate to the library-book-network-backend directory:
cd library-book-network-backend

- Install dependencies (assuming Maven is installed):
mvn clean install

- Run the application but first replace the x.x.x with the current version from the pom.xml file
java -jar target/library-book-network-api-x.x.x.jar

- Access the API documentation using Swagger UI:
Open a web browser and go to `http://localhost:8088/swagger-ui/index.html.