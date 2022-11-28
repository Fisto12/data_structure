function catAndMouse(x, y, z) {
   let catBPos =  Math.abs(y-z)
   let catAPos =  Math.abs(x-z)
   if(catBPos < catAPos){
         return 'catB'   
   }else if(catAPos === catBPos){
 return 'MouseC'
   } else{
      return 'catA' 
   }

}
 console.log(catAndMouse(1,2,3));

//  0   1    2     3     4      5       6
   
//          catA        mouseC  catB      

