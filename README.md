# Sequelize-basic - Node.js Sequelize with MySQL
This content of git repository is the implementation of explanation in the [digital ocean link](https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql).
This document serves as a supplementary resource for students studying CSE5006 and CSE3CWA. It aims to provide a foundational understanding of how MySQL, Sequelize (a promise-based ORM), and JavaScript interact in web development.

## Prerequisites
Before you begin, ensure that you have the following prerequisites installed:
1. **Node.js**: Make sure Node.js is installed on your system. If not, you can download it from the official website.
2. **MySQL**: Install MySQL using Homebrew (on macOS or Linux):
    ```
    brew install mysql
    ```
   If you encounter any issues, consider restarting MySQL (search how to restart in the terminal).

## Installing and Configuring Sequelize
1. Begin by creating a project folder. For example, you can use `hello-world`.
2. Navigate to the folder using the terminal:
    ```
    mkdir hello-world
    cd hello-world
    ```
3. Create a sample Node.js application using the following command:
    ```
    npm init
    ```
4. Answer the set-up questions. Press ENTER to use the displayed default values and set the main entry point as `server.js`. This creates a project structure that is easy to maintain.

### Set MySQL Root Password
1. Access MySQL using the root user:
    ```
    mysql -u root
    ```
2. Set a password for the MySQL root user (note that this practice is insecure; we’ll address security later):
    ```
    mysqladmin -u root password your_password_here
    ```
3. Create the `hello_world_db` database:
    ```
    CREATE DATABASE hello_world_db;
    ```
4. Check whether the database is created:
    ```
    SHOW DATABASES;
    ```
5. Exit the MySQL system:
    ```
    exit
    ```

### Connecting to MySQL Database
Create a `server.js` file in the root folder and copy the following code:
```javascript
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'hello_world_db', // Database name
    'root', // MySQL username
    'your_password_here', // MySQL password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Define your models and perform database operations using Sequelize

// Example: Create a User model
const User = sequelize.define('User', {
    username: Sequelize.STRING,
    email: Sequelize.STRING
});

// Sync the models with the database
sequelize.sync().then(() => {
    console.log('Database and tables created!');
}).catch((error) => {
    console.error('Error syncing database:', error);
});
