function countWord() {
    let sentence = document.getElementById("evaluatedText").value;
   
    let currentValue=0;
    let arrayOfWord = sentence.split(" ");
    arrayOfWord.forEach(word => {
            if(word!==' '){
                currentValue =  word.length;
                console.log(currentValue); 
            }
          
    });
    
    
    let display = document.getElementById("letterCount");
    display.innerHTML = 'Letter Count: '+ currentValue;
}

