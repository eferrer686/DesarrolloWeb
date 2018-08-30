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
audioCtx = new(window.AudioContext || window.webkitAudioContext)();


var short =500;
var long = 1500;
var delay = 500;

function convertir(val){
  var morse = "";
  word = val.parentNode.childNodes[1].value.toLowerCase();
  for (var i = 0; i<word.length;i++){
    morse += morseMap[word[i]];
  }
  console.log(morse);
  for (var j = 0; j<morse.length;j++){

    console.log(morse[j]);

  }
  html = "<p>"+morse+"</p>"
  document.getElementById("result").innerHTML = html;

}



function beep(duration) {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = 0.5;
  oscillator.frequency.value = 640;
  oscillator.type = "sine";

  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
}
