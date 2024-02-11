const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    'hello_world_db',
    'root',
    'choiru',
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

const Book = sequelize.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATEONLY,
    },
    subject: {
        type: DataTypes.INTEGER,
    }
});


sequelize.sync().then(() => {
    console.log('Book table created successfully!');

    //  This is for creating table

    Book.create({
        title: "Clean Code",
        author: "Robert Cecil Martin",
        release_date: "2021-12-14",
        subject: 3
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

    //  This is for inserting --> This is to find all of the records
    // equivalent with SELECT `id`, `title`, `author`, `release_date`, `subject`, `createdAt`, `updatedAt` FROM `books` AS `books`;



}).catch((error) => {
    console.error('Unable to create table : ', error);
});