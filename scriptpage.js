function fun()
{
	var x=document.getElementById("a1").value;
    var req=new XMLHttpRequest();
	
	req.open("get","somepage.php?name="+x,true);
	req.send();
	req.onreadystatechange=function()
	{
		if(req.readyState==4&&req.status==200)
		{
			if(req.responseText=="This username is already taken")
				document.getElementsByTagName("span")[0].style.color="red";
			else
				document.getElementsByTagName("span")[0].style.color="green";
			document.getElementsByTagName("span")[0].innerHTML=req.responseText;
		}
	};
	
}