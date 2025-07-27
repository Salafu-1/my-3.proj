//script.js

function appenValue(Value){
    document.getElementById(`display`).Value+=value;
}

functionclearDisplay()
{
   
 document.getElementById(`display`).value=""; 
}

functioncalculate()
{
    const display=document.getElementById(`display`);
    try{
        display.value=eval(display);
    }catch{
        display.value=`Error`;
    }
}