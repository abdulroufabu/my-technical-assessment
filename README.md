# math-calculator
Calculator using React and Spring Boot.

<!-- ABOUT THE PROJECT -->
## About The Project
This is an assessment project to demonstrate how to develop and deploy a calculator application using React and Spring Boot in Docker environment.

![product-screenshot!](/images/product-screenshot.png)

## Built With
* [Spring Boot](https://spring.io/projects/spring-boot)
* [React](https://reactjs.org/)
* [Maven](https://maven.apache.org/)
* [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->
## Getting Started

## 1. Run from the sources

### Backend Spring Boot Service

#### Prerequisites
* Java 8
* Maven > 3.2.1

Run the backend app from source

```
git clone https://github.com/abdulroufabu/ymath-calculator.git

cd ymath-calculator\backend

# Building
mvn clean install

# Running
mvn clean install spring-boot:run
```
We can access the backend endpoints on http://localhost:8090

### Frontend React App

#### Prerequisites
* NodeJS > 0.10.x

```
git clone https://github.com/abdulroufabu/ymath-calculator.git

cd ymath-calculator\client

# Install NPM packages
npm install

# Running
npm start
```
Now the frontend app can be accessed on http://localhost:3000

## 2. Run using Docker

### Prerequisites
* Docker

We have to install the Docker Community Edition (CE).

The installation instructions can be followed in the [Official Docker documentation](https://docs.docker.com/get-docker/).

### Run Backend and Frondend app using docker-compose 
```
git clone https://github.com/abdulroufabu/ymath-calculator.git

cd ymath-calculator\backend

# Package spring boot backend app using maven
mvn clean package

cd ymath-calculator

# Run docker command to build Docker images and run the containers for frondend and backend
docker compose -f "docker-compose.yml" up -d --build

```
We can access the backend endpoints on http://localhost:8090

The frontend app can be accessed on http://localhost:3000

## API Documentation

### Access Swagger UI

Open a browser and navigate to: http://localhost:8090/swagger-ui/index.html

![product-screenshot!](/images/swagger-ui.png)

<!-- CONTACT -->
## Contact

Abdul Rouf Abu - abdulroufak@hotmail.com