// GLOBAL

var x = "algo"

function hijo() {
  console.log("hola");

  console.log(x); // "algo"

  function otra(){
    console.log(globalVariable)
  }

  otra()
}

hijo();

console.log("linea 12", x); // 10
/*


GLOBAL {


   var x = 10
    
   hijo {
    this
   }

   this

}
























*/
