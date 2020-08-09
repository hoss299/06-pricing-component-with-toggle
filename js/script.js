var month = document.getElementsByClassName('month');
var year = document.getElementsByClassName('year');
var btn = document.getElementById('myball');

 console.log(month);
 console.log(year);

var i;

function check() {
    if (btn.checked == true){
        console.log("checked");
        for(i=0; i < 3; i++ ){
            month[i].style.display= "none";
            year[i].style.display = "block";
        };         
     } else {
        for(i=0; i < 3; i++ ){
            year[i].style.display= "none";
            month[i].style.display = "block";
        };                   
    }
};


