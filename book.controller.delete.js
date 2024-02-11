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

// ========>
sequelize.sync().then(() => {
    console.log('Book table created successfully!');

    //  This is for creating delete


    sequelize.sync().then(() => {

        Book.destroy({ //Book.destroy({ ... }): This line initiates the deletion process for a record in the Book table, and destroy() is a method  used to delete records.
            where: {
                id: 1 // This part specifies the condition for deletion.:
            }
        }).then(() => { // This block executes if the deletion is successful
            console.log("Successfully deleted record.")
        }).catch((error) => {
            console.error('Failed to delete record : ', error); //  This block executes if there’s an error during deletion
        });

    }).catch((error) => {
        console.error('Unable to operate table : ', error);
    });

// ========>
}).catch((error) => {
    console.error('Unable to create table : ', error);
});