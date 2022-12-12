function countWord() {
    let sentence = document.getElementById("evaluatedText").value;
   
    let currentValue=0;
    let array= sentence.replace(' ','').split("");
       currentValue = array.length;
      
    console.log(currentValue);
    
    let display = document.getElementById("letterCount");
    display.innerHTML = 'Letter Count: '+ currentValue;
}

