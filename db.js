var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql_db', 'root', 'emilence', {
    'dialect': 'mysql'
});
var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;  // <<-- instance
db.Sequelize = Sequelize;  // <<-- Sequelize lib.

module.exports = db;