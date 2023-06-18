# Ask microservice

This repository contains the source code of a microservice responsible for managing questions and answers for user profiles.

### Architecture

The microservice follows a clean architecture, which promotes a clear separation of concerns and facilitates scalability, maintainability and testing of the system.

The project folder structure is as follows:

- src/
- - application // Use case implementations.
- - domain // Domain entities and repository interfaces.
- - infrastructure // Infrastructure layer implementations.
- - main.ts // Entry file initializing the microservice.

### Dependencies

The microservice utilizes the following dependencies:

### Configuration

Before running the microservice, make sure to correctly configure the following parameters:

- Ensure that all required dependencies are installed by running npm install.
- Configure environment variables.

### Execution

To run the microservice, follow these steps:

- Clone this repository to your local environment.
- Configure all dependencies and microservice settings as mentioned earlier.
- Run npm start to start the microservice.
- The microservice is now ready to receive 'Profile:CreateProfile' events and process the associated questions and answers for the profile.

### Contribution

If you would like to contribute to this project, you can follow these steps:

- Fork this repository and clone it to your local environment.
- Create a new branch for your contribution: git checkout -b branch-name.
- Make the desired modifications and improvements.
- Run tests to ensure everything is functioning correctly: npm test.
- Submit a pull request with your changes.

### License

This microservice is licensed under the MIT License. For more information, please see the LICENSE file.

### Contact

If you have any questions or suggestions regarding this project, feel free to reach out to me via email or create an issue. I'm open to collaborations and constructive discussions!
