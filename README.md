
# BOOK-CLUB-PROJECT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

**Book Club** is a dynamic platform designed to foster a vibrant community of book enthusiasts! With Book Club, users can seamlessly join book clubs, indulge in thought-provoking discussions, and stay connected with fellow readers. Key features include secure user authentication, personalized dashboards for an enriched reading experience, and a comprehensive discussion board where users can delve into various literary topics. Dive into the world of books with Book Club and engage in a shared passion for literature!

The URL of the deployed application is: https://book-club-project3.onrender.com/



![Screenshot](client/src/img/screenshot.png)

- ![Video](VIDEO GOES HERE OF WORKING APP!)


## Table of Contents
  - [Description](#description)
  - [User Story](#user-story)
  - [Features](#features)
  - [Installation](#installation)
  - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [Licence](#license)
  - [Contributors](#contributors)
  - [Post MVP Features](#post-mvp-features)
  - [Questions](#questions)

  ## Features
  - User Authentication: Login and registration using email and password.
  - Personalized Dashboard: Displays current book and club details.
  - Discussion Board: Organized by topics and posts, users can participate in or start new discussions.
  - Book Management: Track current and past books in clubs.
  


  ## Installation
  Prerequisite
  - Node.js and npm installed on your machine.

  ```bash
  npm i 
  ```
    
  ## Technologies Used

    The MERN stack architecture is layered with React JS, GraphQL and MongoDB
        
        React JS for the front end/client view: the user inputs data, which is displayed.
        GraphQL with a Node.js and Express.js server equipped with methods to store and retrieve data.
        MongoDB and Mongoose ODM stores data within the database.
           

### Server
- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool (MongoDB Atlas)
- jsonWebToken (JWT): For authentication
- bcrypt: For hashing passwords
- apollo-server-express: GraphQL server for Express
- date-fns: For date manipulation 

### Client
- React.js: JavaScript library for building user interfaces
- React Router DOM: Handles routing in the application
- GraphQL: Query language for APIs
- Apollo Client: State management library for JavaScript apps
- prop-types: Runtime type checking for React props
- jsonwebtoken: For handling JSON Web Tokens in the client


## Setup and Installation
  - clone the repository:
  ```bash
  git clone https://github.com/your-username/book-club.git 
  ```
  - navigate to project directory
  ```bash
  cd book-club-project3
  ```
  - install dependencies for both server and client
  ```bash
  npm run install
  ```
  - seed the database
  ```bash
  npm run seed
  ```
  - running the application
  ```bash
  npm run develop
  ```


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Contributors
- Santiago Palacio
- Patrick Sheehan
- Gibin George
- Crystal DePalma


## Post MVP Features
  - Option to create a group – option to join a group → password to join.
  - Separate discussions on the same book organized by different themes (characters, issues, etc.).
  - Additional discussion prompts.
  - Option to leave a group / choose another.
  - Book progression (current mark, collectively).
  - List of past books with links to past discussions.
  - Join/Leave Club Button.

## Questions
  If you have any questions the contributors of this project may be contacted at:
  - **Crystal DePalma**: [GitHub](https://github.com/cdepalma32), or by [email](mailto:crystaldepalma@yahoo.com)
  - **Santiago Palacio**: [GitHub](https://github.com/Santy520), or by [email](mailto:sspalacio20@gmail.com)
  - **Patrick Sheehan**: [GitHub](https://github.com/sheehpat), or by [email](mailto:sheehpat@gmail.com)
  - **Gibin George**: [GitHub](https://github.com/GibinMGeorge), or by [email](mailto:gibingeorge2001@gmail.com)