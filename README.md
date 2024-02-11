# Sequelize-basic - Node.js Sequelize with MySQL
This content of git repository is the implementation of explanation in the [digital ocean link](https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql).
This document serves as a supplementary resource for students studying CSE5006 and CSE3CWA. It aims to provide a foundational understanding of how MySQL, Sequelize (a promise-based ORM), and JavaScript interact in web development.

## Prerequisites
Before you begin, ensure that you have the following prerequisites installed:
1. **Node.js**: Make sure Node.js is installed on your system. If not, you can download it from the official website.
   
3. **MySQL**: Install MySQL using Homebrew (on macOS or Linux):
    ```
    brew install mysql
    ```
   If you encounter any issues, consider restarting MySQL (search how to restart in the terminal).

## Project Setup
1. Begin by creating a project folder. For example, you can use `hello-world`.
2. Clone the repository following command in your terminal:
    ```
    git clone https://github.com/choiruzain-latrobe/sequelize-basic.git
    ```
    It will download all the necessary files to do sequelize operations later. Note that our working directory will be **sequelize-basic** directory. Thus, we should go to that folder.

3. Install Node.js dependencies by running the following command in the terminal:
    ```
    npm install
    ```

4. Install Sequelize and the MySQL driver:
    ```
    npm install --save sequelize mysql2
    ```

Now you have set up with JavaScript and Sequelize, and next set up the installed MySQL.

### Set MySQL Root Password
1. Access MySQL using the root user:
    ```
    mysql -u root
    ```
2. Set a password for the MySQL root user (note that this practice is insecure; we’ll cover this part):
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

### Connecting to MySQL Database using js files
Please be aware that after pulling the code from Git in the previous step, you’ll encounter several existing JavaScript files. One of these files is **server.js**. Within this file, you’ll find the following script:

```javascript
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
        'hello_world_db',
        'root',
        'choiru', // Replace 'choiru' with your actual MySQL password
        {
           host: 'localhost',
           dialect: 'mysql'
        }
);


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
   ```

Remember to replace `'choiru'` with your actual MySQL root password.

# Running the Application
1. Open the terminal and navigate to your project folder.
2. Run the following command to start your Node.js application:
    ```
    node server.js
    ```
3. Verify Success.

   Check the console output for the “Connection has been established successfully.” message.

If everything is set up correctly, you should see the message "Connection to MySQL database successful!" in the terminal.

# Running other Applications
There are additional files in your project, for examples:
1. add_students_records.js: Defines the students table and inserts student data. Execute with:

    ```
    node add_students_records.js
    ```

2. Other associated files (e.g., array_raw_query.js, book_controller_retrieve.js, etc.) can be executed similarly with:

    ```
    node book_controller_retrieve.js
    ```
Remember for all files, do not forget to **replace `choiru` with your actual MySQL root password**. 
You're now ready to work with Sequelize and MySQL in your Node.js project!
