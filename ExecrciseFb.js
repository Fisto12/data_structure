const Database = [ 
    {
        name:'fisto',
        password:'fistobobo12@'
    },
    {
        name:'Ayo',
        password:'1234'
    },
    {
        name:'shade',
        password:'1234'
    },
    {
        name:'kola',
        password:'1234'
    },
] 

const newsFeed= [
    {
    name:"shola",
    timeline:'I love messi, he is a great footballer'
    },   
    {
    name:"shade",
    timeline:'I love cr7, he is a greatest of all time'
    },
     {
    name:"tobi",
    timeline:'I love art, art expresses deep feelings of your expression'
    },    
]
 const isUserValid = (user,pass) => {
    for(let i = 0; i < Database.length; i++){
        if(Database[i].name === user && Database[i].password === pass  ){
            return true
        }
    }
      return false
 }
  const usernamePrompt = prompt('whats your username')
  const passwordPrompt = prompt('whats your password')
  const signin = (username,password) => {
     if(isUserValid(username,password)){
        console.log(newsFeed); 
     }else{
     alert('your details are incorrect') 
     }
    }
    signin(usernamePrompt,passwordPrompt)


