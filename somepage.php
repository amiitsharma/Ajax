<?php
$x=$_GET["name"];
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,"db1");
$q="select Name from customer where Name='$x'";
$result=mysqli_query($con,$q,mysqli_use_result($con));
$row=mysqli_num_rows($result);
if($row==0)
{
	echo "You can keep this username";
}
  else
  {
	echo "This username is already taken";
  }
?>