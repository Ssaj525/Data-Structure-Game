var currentdate = new Date(); 
var datetime = "Mark Attendance as on : " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() % 12 + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
document.querySelector(".date").innerHTML = datetime;



// New Promise-based usage:
