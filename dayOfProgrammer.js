function dayOfProgrammer(year) {
    // Write your code here
    let days = 0;
    let calendarSystem = ''
    if(year >= 1700 && year <= 1917 ){
      calendarSystem = 'Julian'
    }else if(year > 1918){
         calendarSystem =  "Gregorian"
    }else if(year === 1918){
        calendarSystem =  "transition"
    }
    if(calendarSystem === 'Julian'){
      if(year % 4 === 0){
          days = 29
      }else{
         days = 28
      } 
    }
    if(calendarSystem === 'Gregorian'){
      if( year % 400 === 0 || (year % 100 !== 0 && year % 4 == 0 ) ){
            days = 29
      }else{
           days = 28
      }
    }
    if(calendarSystem === 'transition'){
            days = 15
    }
    let allDays = [31,days,31,30,31,30,31,31]
    const totalDays = allDays.reduce( (x,y) => x+y,0)
   let diff =   256 - totalDays
  
   return diff + '.' + 0 + '9' + '.' + year
  
   
}
console.log(dayOfProgrammer(1918));