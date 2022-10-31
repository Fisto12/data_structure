// const dragon = {
//     name:'dragon',
//     fight(){
//         return 100;
//     },
//     sing(){            
//         return `my name is ${this.name} brather of hahahah`

//     }
// }

// const Lizard = {
//     name:'Lizard',
//     fight(){
//         return 10;
//     }
   
// }
// const singLizard = dragon.sing.bind(Lizard)
// console.log(singLizard());

///prototypal inheritance
const dragon2 = {
    name:'dragon',
    fight(){
        return 100;
    },
    fire:'true',
    sing(){
        if (this.fire) {
            return `my name is ${this.name} brather of hahahah`
        }
    }
}

const Lizard2 = {
    name:'Lizard',
    fight(){
        return 10;
    }
}
Lizard2.__proto__ = dragon2
//console.log(Lizard2.fire); //true

console.log(Lizard2.sing()); //my name is Lizard brather of hahahah
