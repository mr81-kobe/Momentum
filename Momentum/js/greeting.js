
const loginform= document.querySelector("#login-form")
 const loginInput=document.querySelector("#login-form input");

 const loginButton=document.querySelector("#login-form button");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
loginButton.addEventListener("click",function(event){

    const username=loginInput.value;
    if(username===""||username===null){

        alert("Please enter your username ");
    }else if(username.length>10){
        alert("Youer name is too Long");
    }

 }
 ); 
const USERNAME_KEY="username";

const savedUserName=localStorage.getItem(USERNAME_KEY);

if(savedUserName ===null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit",handleSubmit);
}else{
    paintGreeting(savedUserName);
}

 function handleSubmit(event){

    event.preventDefault();
    
    const username = loginInput.value;
    loginform.classList.add(HIDDEN_CLASSNAME);
   
    paintGreeting(username);
    
    localStorage.setItem(USERNAME_KEY,username); 

    console.log(username);
 }

 
function paintGreeting(username){
    greeting.innerText=`Greetings ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

 

