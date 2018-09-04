var morseMap = {
                  a:".-",
                  b:"-...",
                  c:"-.-.",
                  d:"-..",
                  e:".",
                  f:"..-.",
                  g:"--.",
                  h:"....",
                  i:"..",
                  j:".---",
                  k:"-.-",
                  l:".-..",
                  m:"--",
                  n:"-.",
                  o:"---",
                  p:".--.",
                  q:"--.-",
                  r:".-.",
                  s:"...",
                  t:"-",
                  u:"..-",
                  v:"...-",
                  w:".--",
                  x:"-..-",
                  y:"-.--",
                  z:"--..",
                  " ":" "
                }
var short =500;
var long = 1500;
var delay = 500;
var doc = document.getElementById("body");

function convertir(val){
  var morse = "";
  word = val.parentNode.childNodes[1].value.toLowerCase();
  for (var i = 0; i<word.length;i++){
    morse += morseMap[word[i]];
  }


  html = "<p>"+morse+"</p>"
  document.getElementById("result").innerHTML = html;

  // for (var j = 0; j<morse.length;j++){
  //
  //   if(morse[j]=='.'){
  //     document.body.style.backgroundColor = "yellow";
  //     wait(short);
  //     document.body.style.backgroundColor = "blue";
  //     wait(delay);
  //   }else if (morse[j]=='-') {
  //     document.body.style.backgroundColor = "yellow";
  //     wait(long);
  //     document.body.style.backgroundColor = "blue";
  //     wait(delay);
  //   }else{
  //     document.body.style.backgroundColor = "yellow";
  //     wait(short);
  //     document.body.style.backgroundColor = "blue";
  //     wait(short*7);
  //   }
  //
  // }

}
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
