const mylabel = document.getElementById("mylabel"); 
const myinput = document.getElementById("myinput");

const mylabel2 = document.getElementById("mylabel2"); 
const myinput2 = document.getElementById("myinput2");

const mysubumit = document.getElementById("mysubmit"); 

const bmilabel = document.getElementById("bmilabel"); 

const bmiwru = document.getElementById("bmiwru"); 

let bmi;

mysubumit.onclick = function(){
    let weight = Number(myinput.value);
    let height = Number(myinput2.value);

    bmi = weight / (height ** 2);

    bmilabel.textContent = bmi;


 if(bmi <= 18.5){
    bmilabel.textContent = 'you are underweight';
}

else if(bmi <= 24.9){
    bmilabel.textContent = 'you are normal'
}

else if(bmi <= 29.9){
    bmilabel.textContent = 'you are overweight'
}

else{
    bmilabel.textContent = 'you are obese';
}

}