# Apollonia Dental Employee Management Application

This is a simple employee management application built for Apollonia Dental Practice. It allows the clinic to manage employee records and departments, serving as an initial step toward a full employee and customer relationship management (CRM) system.

## Features
- **Employee Management**: Create, read, update, and delete employee records with name, surname, and department.
- **Department Management**: List and add departments.
- **RESTful API**: Backend built with Node.js, Express, and MongoDB.
- **Frontend**: A clean, user-friendly interface for adding and viewing employees.
- **Dockerized**: Packaged with Docker for easy setup and deployment.

## Tech Stack
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Containerization**: Docker, Docker Compose

## Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Node.js](https://nodejs.org/) (optional, for local development without Docker).

## Setup Instructions

### Using Docker
1. Clone the repository:
   git clone <repository-url>
   cd apollonia-dental-app

2. Start the application:
   docker-compose up --build

3. Open your browser and visit `http://localhost:3000`.

### Seeding Initial Data
To populate the database with sample data:
1. Ensure MongoDB is running (via Docker or locally).
2. Run the seed script:
   node seed.js


### Local Development (Without Docker)
1. Install dependencies:
   npm install

2. Set up environment variables in a `.env` file:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/apollonia_dental

3. Start the app:
   node app.js


## API Endpoints
- **Employees**:
  - `GET /employees`: List all employees.
  - `POST /employees`: Create a new employee (`{ name, surname, departmentId }`).
  - `PUT /employees/:id`: Update an employee.
  - `DELETE /employees/:id`: Delete an employee.
- **Departments**:
  - `GET /departments`: List all departments.
  - `POST /departments`: Create a new department (`{ name }`).

## Future Enhancements
- Add user authentication and roles.
- Expand to include patient management, revenue tracking, and staff training records.
- Improve UI with a frontend framework (e.g., React).

## Contributing
Feel free to fork this repository, submit issues, or send pull requests to enhance the project.

## License
This project is licensed under the MIT License.