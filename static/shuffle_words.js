/* Parse TXT file with words and output random shuffled word*/
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

var jumble_word="output";
//var text="";
var text = "<h2>" + jumble_word.shuffle() + "</h2>";
console.log("jumble word",jumble_word,text);
document.getElementById("shufWord").innerHTML = text;
/* Build as many inputs as the length of a word*/
text="";
for (let idx = 0; idx < jumble_word.length; idx++) {
    //const element = jumble_word[idx];
    text += "<div class='oneLetterCol'><input></input></div>";
}
console.log("inputs",text);
document.getElementById("inputLetters").innerHTML = text;
