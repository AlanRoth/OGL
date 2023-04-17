# Requirements
- NPM 9.5.0+

# Execution
There are two scripts, windows and linux, provided to start the backend and frontend services. After executing a script the browser should open to the homepage. Otherwise, navigate to: `localhost:3000/`

## Linux
The linux script will run both the UI and backend in the same terminal.

`> ./start.sh`

## Windows
The windows script will open another command terminal to execute the backend build script.

`> start.bat`

# Usage
The service supports adding and updating records. All records are retrieved by default.
## Adding records
To add a record fill in the respective form without the `id` value.

## Updating records
Provide the `id` value of the record you want to update.

# Endpoints

The available endpoints are:
- '/' (Directs to products as the 'homepage')
- 'products'
- 'customers'