// var myVar;

// function myStartFunction() {
//   myVar = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 2000);
// }

// function alertFunc(param1, param2) {
//   document.getElementById("demo").innerHTML += "Hello ";

//   document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>" 
//   + param1 + "<br>" + param2 + "<br>";
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }
//what i have above is w3

var myPrime;

function myPrimeFunction(){
 myPrime = setInterval(function(){ displayPrime("first parameter");}, 3000);
}
//after going through w3 schools i got a set like this.....
//it just shows 997......why?
function displayPrime() {
    for(var i=0; i<1000; i++){
      if(i==1||i==2||i==3||i==5||i==7||i==11){  //(t % 15)
         document.getElementById("demo").innerHTML += i+ " ";
        //how do i get these prime numbers to separate?
      } else if(i%2 !==0 && i %3 !==0 && i%5 !==0 && i%7 !==0 && i%11 !==0){
           document.getElementById("demo").innerHTML += i+ " ";
        }else{}
      }
}

function myStopPrime() {
  clearInterval(myPrime)
}
///Round Something..... trying to rewrite the set interval







//i can get it to display prime numbers but how to i set it on a timer(setInterval)
//document.write will put it on the html
// (function printPrime(){
//   for(var i=0; i<1000; i++){
//       if(i==1||i==2||i==3||i==5||i==7||i==11){  //(t % 15)
//           document.write(i +" ");
//       } else if(i%2 !==0 && i %3 !==0 && i%5 !==0 && i%7 !==0 && i%11 !==0){
//           document.write(i +" ");
//         }else;
//       }
//     })();
  