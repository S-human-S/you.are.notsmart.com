function unV(){

  var info = document.getElementById('college');
  info.style.display = "none";
  console.log(info);

let random = Math.floor( Math.random() * 101 );
  var percent = document.getElementById('P');
percent.innerHTML = random + "% です！";
var colle2 = document.getElementById('college2');
colle2.style.display = "inline-block";
console.log(colle2);
};
