const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');

db.connect(err => {
    if (err) throw err;
    loadMenu();
});

function loadMenu() {
    console.log(`---------Main Menu---------`)

    inquirer.prompt({
        name: 'mainMenu', 
        type: 'list',
        message: 'Choose Wisely.', 
        choices: [ 'View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role' ]
    })
    .then(response => {
          if(response.mainMenu === 'View All Departments'){
            console.log('View All Departments');
            viewAllDept();
          } else if(response.mainMenu === 'View All Roles'){
            viewAllRole();
          } else if(response.mainMenu === 'View All Employees'){
            viewAllEmp();
          } else if(response.mainMenu === 'Add A Department'){
            addDept();
          } else if(response.mainMenu === 'Add A Role'){
            addRole();
          } else if(response.mainMenu === 'Add An Employee'){
            addEmp();
          } else if(response.mainMenu === 'Update An Employee Role'){
            console.log('Update An Employee Role');
          }
    });
};

function viewAllDept() {
    const query = `SELECT * FROM department`;

    db.query(query, (err, res) => {
        if (err) throw err; 
        console.log(`---------Department Table---------`);
        console.table(res);
        loadMenu();
    });
};

function viewAllRole() {
    const query = `SELECT * FROM roles`;

    db.query(query, (err, res) => {
        if (err) throw err; 
        console.log(`---------Roles Table---------`);
        console.table(res);
        loadMenu();
    });
};

function viewAllEmp() {
    const query = `SELECT * FROM employee`;

    db.query(query, (err, res) => {
        if (err) throw err; 
        console.log(`---------Employees Table---------`);
        console.table(res);
        loadMenu();
    });
};

function addDept() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input', 
            message: 'Department name:'
        }
    ]).then(newDept => {
        db.query(`INSERT INTO department SET ?`,
            {
                name: newDept.name 
            },
            (err, res) => {
            if (err) throw err;

            loadMenu();
            }
        )})
};

function addRole() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input', 
            message: 'Role name:'
        },
        {
            name: 'salary', 
            type: 'input', 
            message: 'Salary:'
        },
        {
            name: 'dept', 
            type: 'input', 
            message: 'Department ID:'
        },
    ]).then(newRole => {
        db.query(`INSERT INTO roles SET ?`,
            {
                title: newRole.name,
                salary: newRole.salary,
                department_id: newRole.dept
            },
            (err, res) => {
            if (err) throw err;

            loadMenu();
            }
        )})
};

function addEmp() {
    inquirer.prompt([
        {
            name: 'firstName', 
            type: 'input', 
            message: 'First name:'
        },
        {
            name: 'lastName', 
            type: 'input', 
            message: 'Last name:'
        },
        {
            name: 'role', 
            type: 'input', 
            message: 'Role ID:'
        },
        {
            name: 'mgr', 
            type: 'input', 
            message: 'Manager ID:'
        },
    ]).then(newEmp => {
        db.query(`INSERT INTO employee SET ?`,
            {
                first_name: newEmp.firstName,
                last_name: newEmp.lastName,
                role_id: newEmp.role,
                manager_id: newEmp.mgr
            },
            (err, res) => {
            if (err) throw err;

            loadMenu();
            }
        )})
};