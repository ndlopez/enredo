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
var text="";
var jumble_words=[];
var xhr=new XMLHttpRequest();
var my_data="https://raw.githubusercontent.com/ndlopez/jumble_game/main/static/jumble_words.json";
xhr.onreadystatechange=function(){
    try {
        if(this.readyState ==4 && this.status == 200){
            jumble_words = JSON.parse(this.responseText);
            //console.log(jumble_words);
            for (let jdx = 0; jdx < jumble_words.length; jdx++) {
                var jumble_word=jumble_words[jdx];
                text += "<div class='row' id='shufWord'><h2>" + jumble_word.shuffle() + "</h2></div>";
                //console.log("jumble word",jumble_word,text);
                //document.getElementById("jumble_this_words").innerHTML = text;
                /* Build as many inputs as the length of a word*/
                text += "<div class='row' id='inputLetters'>";
                for (let idx = 0; idx < jumble_word.length; idx++) {
                    text += "<div class='oneLetterCol'><input></input></div>";
                }
                text += "</div>";
                console.log("inputs",text);
                document.getElementById("jumble_this_words").innerHTML = text;
            }
        }
        
    } catch (error) {
        console.log("Error connecting to",my_data);
    }
};
xhr.open("GET",my_data,true);
xhr.send();
console.log("my words",jumble_words.type);
/*const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();*/

