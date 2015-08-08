# JavaScript - Object Oriented Programming (oop)

### Prototype 1

- Create a student object with the following info:
	- first name
	- last name 
	- age
	- grade
- Add the following methods to your student object:
	- Method that returns the students full name
		- This function should take no parameters
		- The function should **RETURN** a string similar to: "John Doe"
- Test your student object by making 3 different students and storing them in variables
	- Call your "fullName" method to ensure it is working properly 

### Prototype 2

- Create a classroom object with the following info:
	- students in class, as array
	- students out of class, as array
	- Teacher, as a string
- Add the following methods to your classroom object:
	- enroll student
		- This function should take in one student object as a parameter
		- The function should place the newly added student into the "in class" array
		- The function should return a message that the student was successfully enrolled
	- put a student in class
		-  This function should take an already enrolled student that is in the "out of class" array and move them to the "in class" array
		- The function should take in two parameters
			- Parameter 1 - Students first name
			- Parameter 2 - Students second name
		- The function should verify that the student is an enrolled student 
		- If the student is enrolled and is "out of class", then move them to the "in class" array
		- The function should return a message according to the actions taken for that student, for example:
			- "No student by that name enrolled in this class"
			- "Student is already in class"
			- "Student successfully returned to class"
	- send a student out of class
		-  This function should take an already enrolled student that is in the "in class" array and move them to the "out of class" array
		- The function should take in two parameters
			- Parameter 1 - Students first name
			- Parameter 2 - Students second name
		- The function should verify that the student is an enrolled student 
		- If the student is enrolled and is "in class", then move them to the "out of class" array
		- The function should return a message according to the actions taken for that student, for example:
			- "No student by that name enrolled in this class"
			- "Student is already out of class"
			- "Student successfully sent out of class"
	- dismiss all students
		- This function should take no parameters
		- The function should remove all students that are in the "in class" array and add them to the "out of class" array
		- The function should return a message on success:
			- "All students have left the classroom"
	- return all students
		- This function should take no parameters
		- The function should remove all students that are in the "out of class" array and add them to the "in class" array
		- The function should return a message on success:
			- "All students have returned to the classroom"
	- show students in class
		- This function should take no parameters
		- The function should return a list of all students currently in the classroom, using there first and last names
	- show students out of class
		- This function should take no parameters
		- The function should return a list of all students currently out of the classroom, using there first and last names

### Prototype 3

- Using your student object from above
 - Create 6 unique students

- Using your classroom object from above
 - Add all six students to one new classroom object
 - Using all the methods for your classroom object:
 	- Send three students out of class
 		- output a list of the remaining students in class
	- Use the dismiss all students method to remove the reaming students from class
		- output a list of the students that are out of class (should be all 6)
		- output a list of students remaining in class (should be 0)
	- Send 2 students back to class
		- output both lists, one for students in class, one for students out of class
	- Return the reaming students to class using the "return all students" method 
		- output both lists, one for students in class, one for students out of class
