var myStudent;

$(document).ready(function(){

	$("#submit").on("click", function(){
		var fName = $("#fName").val();
		var lName = $("#lName").val();

		myStudent = new student(fName, lName);
	});

	$("#show").on("click", function(){
		console.log("Current Student Object", myStudent);
	});

});

function student(fName, lName){
	var self = this;

	self.firstName = fName;
	self.lastName = lName;
	self.avgGrade = null;

	self.init = function(){
		var info;
		$.ajax({
			url: "get_info.php",
			data: {fName: self.firstName, lName: self.lastName},
			dataType: "json",
			cache: false,
			method: "POST",
			success: function(res){
				if(res.success){	
					self.age = res.data.age;
					self.courseList = res.data.course;
					self.gradeList = res.data.grade;
					self.major = res.data.major;
					self.age = res.data.age;
					self.sex = res.data.sex;
					self.id = res.data.id;
				}else{
					self.errors = res.errors;
					self.errors.push("Unable to successfully create object");
				}
			}
		});
	}

	//Call init when object is created, Don't remove
	self.init();
}