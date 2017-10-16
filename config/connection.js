var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL)
{
	connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"Kartik@01",
		database:"asap_locksmith_db"
	})
};

connection.connect();
module.exports = connection;