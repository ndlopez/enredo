// Not in use functions
function idontWork(){
    for (let idx = 0; idx < usedWords.length; idx++) {
        for (let letter of usedWords[idx]){
            letter = letter.toUpperCase();
            let inputVal = document.getElementById(letter);
            inputVal.onkeyup = function(){
                var myVal = inputVal.value;
                if (myVal.toUpperCase() === letter){
                    inputVal.classList.remove("wrongAns");
                    inputVal.classList.add("correctAns");
                    counter += 1;
                }
                else{
                    if(myVal.value === "" || myVal.toUpperCase !== letter){
                        inputVal.classList.remove("correctAns");
                        inputVal.classList.add("wrongAns");
                    }
                }
            }
            //console.log("correct ans",counter);
        }
        //console.log("total letters in ",usedWords[idx],usedWords[idx].length);
    }
}