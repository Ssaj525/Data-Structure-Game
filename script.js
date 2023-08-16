var currentdate = new Date();
var datetime = "Mark Attendance As On: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " at" + " " 
+ currentdate.getHours() % 12 + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

document.querySelector(".date").innerHTML = datetime;

document.getElementById("download-btn").addEventListener("click",function(){
    var element = document.getElementById('element-to-print');
var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
html2pdf().set(opt).from(element).save();
});


// New Promise-based usage:
