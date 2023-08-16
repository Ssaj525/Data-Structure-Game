var currentdate = new Date();
var datetime = "Mark Attendance As On: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " at" + " " 
+ currentdate.getHours() % 12 + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

document.querySelector(".date").innerHTML = datetime;


// New Promise-based usage:
