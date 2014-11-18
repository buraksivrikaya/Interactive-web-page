


<?php
	$con=mysqli_connect("localhost","root","","blog");
	$sql= "select * from post order by id";
	$result=mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($result)){
		$title = $row['title'];
		$content = $row['content'];
		$catagory = $row['catagory'];
		$imagename = $row['imagename'];
	}
?>

