//THIS gives method access to their object
const obj1 = {
     name:'fisto',
     sayMyName ()  {
        return 'my name is' + ' ' + this.name
     }
}
console.log(obj1.sayMyName());


//Execute same code for multiple object

function importantPerson(){
    return 'His name is ' + " " + this.name
}

const obj2 = {
    name:'fisto',
    importantPerson
}

const obj3= {
    name:'sansa',
    importantPerson
}

console.log(obj2.importantPerson());
console.log(obj3.importantPerson());

