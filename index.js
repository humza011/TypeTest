const calcTime = () => {
    var strFree = Array.from($("#freeText").val().trim());
    var strTest = Array.from($("#testText").text());
   // console.log(strFree);
    var lenFree = strFree.length;
    //console.log(lenFree);
    console.log(strTest.slice(0,lenFree));
    strFree.forEach((letter,index) => {
      
      console.log(letter,index);
      console.log(strTest[index]);
    });
    
  }
  
  setTimeout(() => {
   console.log("After 5 seconds");
    calcTime();
    console.log("End")
  },5000)
  
  