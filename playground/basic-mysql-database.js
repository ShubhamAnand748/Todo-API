var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql_db', 'root', 'emilence', {
    'dialect': 'mysql'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync({
    //force: true
}).then(function () {
    console.log('Everything is synced...');

    Todo.findById(2).then(function(todo) {
        if (todo) {
            console.log(todo.toJSON());
        } else {
            console.log('Id 2 is not found...');
        }
    })

    // Todo.create({
    //     description: 'I want to go home!',
    //     completed: true
    // }).then(function (todo) {
    //     return Todo.create({
    //         description: 'I need your help!'
    //     });
    //     }).then(function (todo) {
    //         //return Todo.findById(1)    // <<<---- return only id:1
    //         return Todo.findAll({
    //             where: {
    //                 description: {
    //                     $like : '%Home%'
    //                 }
    //             }
    //         });
    // }).then(function (todos) {
    //     if (todos) {
    //         todos.forEach(function(todo) {
    //             console.log(todo.toJSON());
    //         });
    //     } else {
    //         console.log('No todo found...');
    //     }
    // }).catch(function (e) {
    //     console.log(e);
    // });
});