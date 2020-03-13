$( document ).ready(function() {
  $("#tryagain").prop("disabled", true);
});

const calcTime = () => {
    var enteredText = Array.from($("#enteredtxt").val().trim());
    var actualText = Array.from($("#actualtxt").text());
    var lenFree = enteredText.length;
    // var arrEntered = [];
    // enteredText.forEach((letter,index) => {
    //   arrEntered.push(enteredText[index]); 
    // });

    var actualLen = actualText.slice(0,lenFree);
    
    console.log(actualLen);
  
  }
  
  setTimeout(() => {
   console.log("After 5 seconds");
    calcTime();
    $("#tryagain").prop("disabled", false);
    console.log("End")
  },5000)
  
  