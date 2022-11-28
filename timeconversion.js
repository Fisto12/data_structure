function timeConversion(s) {
    // Write your code here
    // 12AM => 00
    // 1AM-11AM => DO NOTHING or retain;
    // 12PM - 11PM => add 12
    const AMPM = s.charAt(8)
    let millitaryHour = ''
    if(AMPM == 'A'){
         if(s.slice(0,2) === '12') {
              millitaryHour = '00' //00
         }else{
             millitaryHour = s.slice(0,2)  //01
         }
    }else{ //p
        if(s.slice(0,2) === '12') {
            millitaryHour = s.slice(0,2)
        }else{
            millitaryHour = parseInt(s.slice(0,2),10) + 12
        }
    } 

    return millitaryHour + s.slice(2,8)
}
console.log(timeConversion('06:00:PM'));





























