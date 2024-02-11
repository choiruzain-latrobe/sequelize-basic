const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'sample_student_db',
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

sequelize.query(
    'SELECT * FROM students WHERE student_id = ?',
    {
        replacements: ['49de78a8-ad1a-4ecc-91c7-547ed44644ef'],
        type: sequelize.QueryTypes.SELECT
    }
).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to insert data : ', error);
});

