let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let gro1;
let gro2;
let gro3;
function calculateGrocery(){
    gro1 = parseFloat(document.getElementById('grocery1').value)
    gro2 = parseFloat(document.getElementById('grocery2').value)
    gro3 = parseFloat(document.getElementById('grocery3').value)
let totalAmount = gro1 + gro2 + gro3;
    document.getElementById('result2').innerText = `The total amount is : ${totalAmount} €`
}