var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var Sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        'dialect': 'postgres'
    });
} else {
    sequelize = new Sequelize('mysql_db', 'root', 'emilence', {
        'dialect': 'mysql'
    });    
}

var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.sequelize = sequelize;  // <<-- instance
db.Sequelize = Sequelize;  // <<-- Sequelize lib.

module.exports = db;