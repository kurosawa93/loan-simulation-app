# Loan Simulation App

This app is used to display data from related Loan Simulation API.

## Prerequisite

To run this application, your local machine must have these tools installed

- Node.js >= 8
- npm >= 3

## Installation
To install this application, you can follow these steps below;

- `git clone git@github.com:kurosawa93/loan-simulation-app.git`
- `cd loan-simulation-app
- `npm install`
- `npm run serve`

After the last step, the application now should be running and listening at port `8080`. Try hitting `http://localhost:8080`, you should be greeted by home page to upload csv.

## API Route
The API route is hardcoded in the page, it pointing to `http://localhost:3333`. This should be improved later, but for now speed is more important. Make sure the Loan Simulation API is running in your machine in order to view the data.

## Available Routes
These routes are after a successfull installation;

- `/` The application homepage. also serve as page to upload data.
- `/queue` borrower queue list which needs to be evaluated
- `/approved` borrower list which has been approved after evaluation
- `/rejected` borrower list which has been rejected after evaluation

