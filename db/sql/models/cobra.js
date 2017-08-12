var Sequelize = require('sequelize');
var db = new Sequelize('cobra', 'root', '', {
	host: 'localhost', 
	dialect: 'mysql'
});

var SQLCobra = db.define('Cobra', {
	name: Sequelize.STRING,
	age: Sequelize.INTEGER
});

SQLCobra.sync();

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = SQLCobra;