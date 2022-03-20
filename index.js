const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');

db.connect(err => {
    if (err) throw err;
    loadMenu();
});


const loadMenu = function() {

    console.log(`---------Main Menu---------`)
    
    inquirer.prompt({
        name: 'mainMenu', 
        type: 'list',
        message: 'Choose Wisely.', 
        choices: [ 'View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role' ]
    })
    .then(response => {
          if(response.mainMenu === 'View All Departments'){
            console.log('View All Departments');
          } else if(response.mainMenu === 'View All Roles'){
            console.log('View All Roles');
          } else if(response.mainMenu === 'View All Employees'){
            console.log('View All Employees');
          } else if(response.mainMenu === 'Add a Department'){
            console.log('Add a Department');
          } else if(response.mainMenu === 'Add A Role'){
            console.log('Add A Role');
          } else if(response.mainMenu === 'Add An Employee'){
            console.log('Add An Employee');
          } else if(response.mainMenu === 'Update An Employee Role'){
            console.log('Update An Employee Role');
          }
    });
};