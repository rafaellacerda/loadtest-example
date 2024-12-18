# Load Test Example PoC

This project is a Proof of Concept (PoC) for load testing a Node.js server using Express, Artillery for load testing, and Supertest for API testing. The project demonstrates how to set up a basic server, perform load tests, and validate API endpoints.

## Project Structure

- `src/index.js`: The main server file using Express.
- `src/server.test.js`: Tests for the server API using Supertest.
- `load-test.yml`: Configuration file for Artillery load testing.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd loadtest-example/server
2. **Install dependencies:**
    ```
    npm install
    
## Running the Server
### To start the server, run:
    npm start
The server will be running at http://localhost:3001.

### Running API Tests
To run the API tests using Supertest and Jest, execute:
```
npm test
```

### Run the load test:
Execute the following command to run the load test and generate a report:
```
artillery run --output report.json load-test.yml
```

### View the report:
Generate an HTML report from the JSON output:
```
artillery report report.json
```
This will open a detailed report in your default web browser.
