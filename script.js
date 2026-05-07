const mylabel = document.getElementById("mylabel"); //weight
const myinput = document.getElementById("myinput");

const mylabel2 = document.getElementById("mylabel2"); //height
const myinput2 = document.getElementById("myinput2");

const mysubumit = document.getElementById("mysubmit"); //submitbutton

const bmilabel = document.getElementById("bmilabel"); //result

let bmi;

mysubumit.onclick = function(){
    let weight = Number(myinput.value);
    let height = Number(myinput2.value);

    bmi = weight / (height ** 2);

    bmilabel.textContent = bmi;
}
 