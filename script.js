//your JS code here. If required.
document.getElementById("fname").onmouseout=function()
												{
													mouseout()
												};

function mouseout()
{
	const temp=document.getElementById("fname");
	temp.value=temp.value.toUpperCase();
}