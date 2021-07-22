let Inputs = document.getElementById("inputs");
let display=document.getElementById("display");
let c = 1;


function Add_Field() {
    var newfield = document.createElement('input');
    newfield.setAttribute('type', 'number');
    newfield.setAttribute('class', 'subject');
    newfield.setAttribute('placeholder', ` Subject ${c}`);
    Inputs.appendChild(newfield);
    c += 1;
}

function Remove_Field() {

    var input_tag = Inputs.getElementsByTagName('input');
    Inputs.removeChild(input_tag[(input_tag.length) - 1]);
    c -= 1;
}

let subject;
let total;
let pr;
let grade = '';
let status ;
function Calculate() {
    total = 0;
    status ="PASS";
    subject = document.querySelectorAll(".subject");
    
    for (let c = 0; c < subject.length; c++) {
        total = total + parseFloat(subject[c].value);
    }
    pr = (total) / (subject.length * 100) * 100;
    console.log(pr);


    switch (Math.floor(pr/10)){
        case 9 :
            grade='AA';
            break;
        case 8 :
            grade='AB';
            break;
        case 7 :
            grade='BC';
            break;
        case 6 :
            grade='CC';
            break;
        case 5 :
            grade='CD';
            break;
        case 4 :
            grade='DD';
            break;
        default:
            grade='FF';
            status="FAIL";
            break;
    }

    for (let c = 0; c < subject.length; c++) {
        if(subject[c].value < 40 ){
            status="FAIL";
            grade='FF';
        }
    }
    
}



function Display (){
    
    if(status=="PASS"){
        display.innerHTML="<h3 style=' color: green;'> Congratulation You Pass the Exam </h3> ";
    }else{
        display.innerHTML="<h3 style='color: red;'> Sorry You Failed in the Exam </h3> ";
    }

    display.innerHTML+="<div class='print '> <p> Subject </p> <p> Marks </p> </div>  ";
    
    for (let c = 0; c < subject.length; c++) {
        
        display.innerHTML+=`<div class='print'> <p> ${c+1} </p> <p> ${subject[c].value} </p> </div> `;
    }

    display.innerHTML+=`
    <br>
    <div class='print b'> <p> Total </p> <p> ${total} / ${subject.length * 100} </p> </div>
    <div class='print b'> <p> Percentage </p> <p> ${pr.toFixed(2)} </p> </div>
    <div class='print b'> <p> Grade </p> <p> ${grade} </p> </div>
    <div class='print b'> <p> Status </p> <p> ${status} </p> </div>
    `
}

