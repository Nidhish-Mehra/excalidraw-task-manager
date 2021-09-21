<p align="center">

  <a href="http://excalidraw-task-manager.herokuapp.com/"><h1 align="center">Excalidraw Task Manager</h1></a>

  <p align="center">
    A tool to create low fidelity designs and mock ups.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
    <li><a href="#features-under-progress">Features under progress</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Excalidraw task manager is a simple yet effective tool to create low fidelity mockups/designs and later export them as svg.
It bypasses the need for a complete third party app being installed on your machine, while trying to maintain all the features
needed for a seemless experience. A simple and intuitive user interface makes it the ideal tool for a beginner trying to make
simple svg icons for his site or a rough wireframe for the client.</br>

### Built With

A list of technologies used in the project.
* [MongoDb](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may set up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this project locally [Node.js](https://nodejs.org/en/) must be installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Nidhish-Mehra/excalidraw-task-manager.git
   ```
2. Install Client and Server dependencies in respective directories
   ```sh
   npm install
   ```
3. Add MONGOURI in dev.js to connect to database
   ```javascript
   module.exports={
    MONGOURI:"YOUR_MONGO_URI"
   }
   ```
4. Start node server
   ```sh
   node app
   ```
5. Start client server
   ```sh
   npm start
   ```
   
<!-- USAGE EXAMPLES -->
## Usage
* Once you have your local copy up and running you can start creating your designs and save them as SVG.
* If you dont want a local copy and still want to use this tool or just check it out.<br> You can visit http://excalidraw-task-manager.herokuapp.com/

## Features under progress
* An authentication/Session system that will help users to save their work online.
* A task manager that will help different users to work in teams.
* Room creation and live board sharing.


If you wish to contribute to this project hit me up with a pull request.
   
