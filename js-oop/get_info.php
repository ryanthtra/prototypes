<?php
require_once('db_connect.php');

$output['success'] = false;

if(isset($_POST['fName']) && isset($_POST['lName'])){
	
	$fName = $_POST['fName'];
	$lName = $_POST['lName'];

	if($fName === ''){
		$output['errors'][] = 'No first name given';
	}
	if($lName === ''){
		$output['errors'][] = 'No last name given';
	}

	if(!isset($output['errors'])){
		$query = "SELECT s.id AS student_id, s.major, s.sex, s.age, s.id, g.grade, g.course FROM students AS s 
		JOIN grades AS g ON s.id=g.student_id WHERE s.first_name='$fName' AND s.last_name='$lName'";

		$result = mysqli_query($conn, $query);
		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$output['data']['age'] = (int) $row['age'];
				$output['data']['course'][] = $row['course'];
				$output['data']['grade'][] = (int) $row['grade'];
				$output['data']['major'] = $row['major'];
				$output['data']['sex'] = $row['sex'];
				$output['data']['student_id'] = $row['student_id'];
			}
			$output['success'] = true;
		}else{
			$output['errors'][] = "No student found with the name of $fName $lName";
		}
	}

}else{
	$output['errors'][] = 'POST variables not set';
}

echo json_encode($output);
?>