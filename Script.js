//JavaScript.js

function appenValue(value){
    document.getElementById(`display`).value+=value;
}

function clearDisplay()
{
   
 document.getElementById(`display`).value=""; 
}

function calculate()
{
    const display = document.getElementById(`display`);
    try {
        display.value = eval(display.value);
    } catch {
        display.value = `Error`;
    }
}