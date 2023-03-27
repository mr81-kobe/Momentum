const formToDo=document.querySelector('#todo-form');
const listToDo=document.querySelector('#todo-list');
const todoValue=formToDo.querySelector('input');
const existToDo=JSON.parse(localStorage.getItem("todoList"));
let todoList =[];
function addToDo(todoValue){
  
    const li=document.createElement('li');
    li.id=todoValue.id;
    const span=document.createElement('span');
    span.innerText=todoValue.text;
    appendList(span,createButton(),li)
    todoList.push(todoValue);
    //li.appendChild(span);
     //li.appendChild(createButton()); 
    //listToDo.appendChild(li);
    
  

}



function createButton(){
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",function(event){
        event.preventDefault();
       // 
       const li = this.parentElement;
        
       todoList=todoList.filter(todo => todo.id!==parseInt(li.id ));
       
       //todoList=deleteTodo(event.target);
       localStorage.setItem("todoList",JSON.stringify(todoList));
     
        
       
        
        event.target.parentElement.remove();
    });
    return button;
}

function appendList(span,button,li){
li.appendChild(span);
li.appendChild(button);
listToDo.appendChild(li);
}


function existTodoList(){
    
     
    

    existToDo.forEach(item => {
        const span = document.createElement("span");
    const li = document.createElement("li");
    li.id=item.id;
    span.innerText=item.text;
    appendList(span,createButton(),li);
    



})
    
    
    
}

formToDo.addEventListener('submit',function(e){

e.preventDefault();
const newToDoInputValue=todoValue.value;
const newToDoObj={
    text:newToDoInputValue,
    id:Date.now(),

   }
    


addToDo(newToDoObj);
localStorage.setItem("todoList",JSON.stringify(todoList));
todoValue.value=''; 



}
);
if(existToDo!==null){
    existTodoList();
    todoList=existToDo;
}
