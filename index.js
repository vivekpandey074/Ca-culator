const resultText=document.getElementById("resultText")


function inputChar(input){

    
    if(resultText.value.length>=1)
    {
        const lastchar=resultText.value.charAt(resultText.value.length - 1)
        if( (input==='.' || input ==='+' || input==='-' || input==='/' || input==='*') && (lastchar==='.' ||lastchar==='+' || lastchar==='-' || lastchar==='/' || lastchar==='*')) return;
    }

    resultText.value+=input;
}


function backspace(){
    if(resultText.value.length===1 || resultText.value==="Error"  || resultText.value==="Infinity"){
        resultText.value="";
        return;
    }
   
   

    resultText.value=resultText.value.slice(0,-1);
}

function clearInput(){
    resultText.value="";
}
 

function calculate(){
    try{
const temp=eval(resultText.value).toFixed(3);
if(temp.slice(-3)==="000"){
    resultText.value=temp.slice(0,-4);
    return;
}
resultText.value=temp;


    }
    catch(error){
      resultText.value="Error";
    }
}