# CloudFinalProject
# Patient Data Management System

This is a repository for a Patient Data Management System that utilizes internet technologies and integrates with free cloud services. The system is built using Express.js and Node.js, and it allows you to store and retrieve patient data, perform facial image verification, and receive initial diagnoses using OpenAI's ChatGPT. The data is stored in a MongoDB database.

## Functionality
1. The solution is developed using Express.js and Node.js.
2. The system receives patient data, including the following fields:
   - ID
   - First name
   - Last name
   - Date of birth
   - Photo
   - Five potential medical conditions the patient suffers from
3. The system saves the patient data and allows retrieval of a patient card based on his ID.
4. The system verifies that the uploaded image is a face image using Imagga.
5. The system allows entering symptoms and receiving an initial diagnosis by interacting with ChatGPT.
6. The patient data is saved in a MongoDB database.

## Code Details
- The database is named "Person".
- The `db.js` file handles the connection to the MongoDB database.
- The `checkimage.js` file handles the connection to Imagga for facial image verification.
- The `askChatGPT.js` file handles the connection to OpenAI's ChatGPT for initial diagnosis.
- The `server.js` file is the main Node.js file that contains the following functions:
  - `/save`: This endpoint receives a new person's details and saves them to the database.
  - `/read`: This endpoint searches for a person's details based on their ID and prints them.
  - `/ask`: This endpoint receives a quotation and returns an answer from ChatGPT.
- There are four HTML files in the project:
  - `index.html`: This is the main menu.
  - `peopleform.html`: This is the form for entering details of a new person.
  - `find.html`: This allows searching for a person by their ID.
  - `chat.html`: This is used for asking a quotation to ChatGPT.
- The application runs on `http://localhost:3000`.

## Authors
This project is developed by Yuval Farjun and Roy Efrat.
