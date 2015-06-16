# JavaScript Object Oriented Programming (oop)

## Getting Started

- Change the filename of `db_connect.php.config` to `db_connect.php`
- Update `mysqli_connect()` inside `db_connect.php` to match your info
	- We will be using the database from the `mysqli_Advanced` prototype
	- The database name should be `school_db`
- Open the index.php file through your XAMPP web server
- Enter any random first and last name into the fields click `Find Student`
- Open your console
- Click `show`
- Note the object that was created
	- It should have errors from not being able to find the student you entered
- Now try entering `Eric Johnson` into the fields, click `Find Student`
- Click `show`
- All the proper information should be in the object now

### Prototype 1

- Inside the `main.js` file you will find the function that builds the student object
- Add another function to the student object that finds their average grade and store it into the object

### Prototype 2

- Add another function to the object that displays all of the students info **neatly** on the screen
- Have the show button call the students show info function to display all of the students info on the screen