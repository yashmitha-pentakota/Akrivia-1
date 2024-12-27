const sqlite3 = require('sqlite3').verbose();
// Create a new SQLite database (mydatabase.db)
const db = new sqlite3.Database('students.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database (students.db).');
  }
});

// Create a new table in the database
db.run('CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, username TEXT ,password TEXT)', function(err) {
    if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table created or already exists.');
      }
    });
   
    // Insert some sample data into the "users" table
    const stmt = db.prepare('INSERT INTO students (name, username , password) VALUES (?, ?, ?)');
    stmt.run('yashmitha', 'yashmitha1' ,'12345678');
    stmt.run('krithi', 'krithi2', '87654321' );
    stmt.finalize(() => {
      console.log('Sample data inserted.');
    });

    // db.close((err) => {
    //     if (err) {
    //       console.error('Error closing the database:', err.message);
    //     } else {
    //       console.log('Database connection closed.');
    //     }
    //   });
    module.exports = db