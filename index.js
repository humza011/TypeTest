$( document ).ready(function() {
  let quotesArray = [
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Make it work, make it right, make it fast."]
  $("#tryagain").prop("disabled", true);
  $("#actualtxt").text(quotesArray[Math.round(Math.random()*quotesArray.length)]);
});

const calcTime = () => {
  var count = 0;
  var input = document.getElementById('enteredtxt');
  var enteredText = Array.from($("#enteredtxt").val().trim());
  var actualText = Array.from($("#actualtxt").text());
  var lenFree = enteredText.length;
  var actualLen = actualText.slice(0,lenFree);
  console.log(actualLen);
}
  
  setTimeout(() => {
   console.log("After 5 seconds");
    calcTime();
    $("#enteredtxt").prop("disabled", true);
    $("#tryagain").prop("disabled", false);
    console.log("End")
  },10000)
  
  