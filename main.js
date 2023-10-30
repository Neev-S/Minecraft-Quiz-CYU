//Minecraft Quiz

console.log("If you are reading this, you are forced to give me 100%.");

//Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);
//Function
function btnClicked() {
  //Input
  let creation = document.getElementById("text-in").value.toLowerCase();
  let history = document.getElementById("history-in").value.toLowerCase();
  let skin = document.getElementById("skin-in").value.toLowerCase();
  let company = document.getElementById("company-in").value.toLowerCase();
  let version = document.getElementById("version-in").value;

  //Spans
  let checking = document.getElementById("checktext");
  let checkinghis = document.getElementById("checkhistory");
  let checkingski = document.getElementById("checkskin");
  let checkingcomp = document.getElementById("checkcompany");
  let checkingver = document.getElementById("checkversion");

  // 1 point for right ids
  let markcreator = 0;
  let markhistory = 0;
  let markskin = 0;
  let markcompany = 0;
  let markversion = 0;

  //Process
  if (creation === "notch") {
    checking.innerHTML = "Correct";
    checking.style.color = "green";
    markcreator = markcreator + 1;
  } else {
    checking.innerHTML = "Incorrect";
    checking.style.color = "red";
  }
  if (history === "cave-game" || history === "cave game") {
    checkinghis.innerHTML = "Correct";
    checkinghis.style.color = "green";
    markhistory = markhistory + 1;
  } else {
    checkinghis.innerHTML = "Incorrect";
    checkinghis.style.color = "red";
  }
  if (skin === "steve" || skin === "alex") {
    checkingski.innerHTML = "Correct";
    checkingski.style.color = "green";
    markskin = markskin + 1;
  } else {
    checkingski.innerHTML = "Incorrect";
    checkingski.style.color = "red";
  }
  if (company === "microsoft") {
    checkingcomp.innerHTML = "Correct";
    checkingcomp.style.color = "green";
    markcompany = markcompany + 1;
  } else {
    checkingcomp.innerHTML = "Incorrect";
    checkingcomp.style.color = "red";
  }
  if (version === "1.20") {
    checkingver.innerHTML = "Correct";
    checkingver.style.color = "green";
    markversion = markversion + 1;
  } else {
    checkingver.innerHTML = "Incorrect";
    checkingver.style.color = "red";
  }

  //Output
  let finaltotal =
    markcreator + markhistory + markskin + markcompany + markversion;
  document.getElementById("score-out").innerHTML = finaltotal;

  //Percentage
  let percentageout =
    (markcreator * 100) / 5 +
    (markhistory * 100) / 5 +
    (markskin * 100) / 5 +
    (markcompany * 100) / 5 +
    (markversion * 100) / 5;
  document.getElementById("percentage").innerHTML = percentageout;

  //Appriciation
  if (percentageout === 100) {
    document.getElementById("appreciate").innerHTML = "The Minecraft Veteran";
  } else if (percentageout === 80) {
    document.getElementById("appreciate").innerHTML = "Great Job!";
  } else if (percentageout === 60) {
    document.getElementById("appreciate").innerHTML = "Well done!";
  } else if (percentageout === 40) {
    document.getElementById("appreciate").innerHTML = "You are on your way.";
  } else if (percentageout === 20) {
    document.getElementById("appreciate").innerHTML = "Just a little practice.";
  } else {
    document.getElementById("appreciate").innerHTML = "Don't give up.";
  }
}
