//console.log(animal);
var animal = 'DOG'  // undefined


//console.log(plant) //error
//console.log(plants) //error
const plant = 'potato'  
let plants =  'potato'  

//console.log(hobby);  //undefined because hobby was hoisted partially
//console.log(hobby()); //TypeError: hobby is not a function
var hobby = function(){
    console.log('my hooby is reading');
}  
 
//sing()  //oh la la la la
function sing(){
    //console.log('oh lalalal'); 
}

  //sing2()  // sing2 is not defined
(function sing2(){
    //console.log('oh lalalal'); 
})


//a() //prints a+
function a(){
    console.log('prints a');
}

function a(){
    console.log('prints a+');
}

var hobby = 'I LOVE PLAYING FOOTBALL'

function hobbies(){
  console.log('original hobby',hobby); //original hobby undefined
  var hobby = 'I LOVE PLAYING TENNIS'
  console.log('favourite hobby',hobby); //favourite hobby I LOVE PLAYING TENNIS

}
hobbies()