# JavaScript - Object Oriented Programming (oop)

### Prototype 1
- Create a student object constructor function called student_object
	- **purpose**: 
		- populate the object with passed in parameters
	- **properties**: 
		- first name (string)(passed as parameter) : the student's first name
		- last name (string)(passed as parameter) : the student's last name
		- age (number)(passed as parameter) : the student's age
		- grade (number)(passed as parameter) : the student's numeric grade
- Add the following methods to your student object:
	- **fullName** (method): Returns the students full name
		- parameters: none
		- returns:  **RETURN** the student's full name as a string, for example "John Doe"
	- **removeSelf** (method):
		- purpose: deletes the object
		- parameters: none
		- returns: none
- Test your student object by making 3 different students and storing them in variables
	- instantiate 3 students, storing them into an array 
	- Use a loop to call your "fullName" method on each object to make sure it is working  

### Prototype 2

- Create a course object constructor called course_object with the following info:
	- **properties**:
		- students_array (array): an array of student_object 
		- teacher (string): the course's teacher's name
		- course_name (string): the course's name
- Add the following methods to your classroom object:
	- **add_student** (method)
		- parameters:
			- student (object): the student to add to the course
		- purpose:
		 	- The function should place the student into the students_array
		- returns: 
			- The number of students in the course
	- **remove_student** (method)
		- purpose: delete a student from the course's students_array
		- parameters: 
			- index (number) : the index of the student
			- OR (you may choose either)
			- student (object) : a direct reference to the student
		- The function should verify that the student is an enrolled student 
		- returns: object with the following data:
			- success (boolean): whether the student was deleted or not
			- "That student is not enrolled in this class"
			- "student removed from class"
	- **find_student_by_name** (method)
		- purpose: 
			- find a student by name
		- parameters:
			- fname(string): Student's first name
			- lname(string): Student's second name
		- returns:
			- object: a reference to the student
	- **dismiss_all_students** (method)
		- purpose: 
			- removes all students from the course
		- parameters:
			- none
		- returns:
			- boolean: success or failure of delete operation
	- **list_all_students** (method)
		- purpose:
			- return the student array
		- parameters: 
			- none
		- returns: array of students

### Prototype 3

- test your objects
	- using prompt and a for loop, add 3 students to one course, "geometry", under "Professor Collins"
	- using prompt and another for loop, add 2 students to another course, "algebra", under "Professor Kimura"
	- find one student from one of the courses, your choice, where the name is valid
	- find one student from one of the courses, your choice, whose name is invalid
	- list all students from geometry (in the console)
	- remove all students from geometry
	- add a student to "geometry", removing them from "algebra"
	- list all students in geometry and in algebra (in the console)
