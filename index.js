// selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');


//Add event listener for add task button
addTaskBtn.addEventListener('click', addTask);


function addTask() {
// To read the value from the input
const taskText =taskInput.value.trim();
if(taskText === ''){
    return;
}

//To create element li with input value
const taskItem = document.createElement('li');
taskItem.className='task';
taskItem.innerHTML= `<span>${taskText}</span><button class="deleteBtn">x</button>`

// To append the  element to task list
taskList.appendChild(taskItem);
taskInput.value= '';

//Function to make tasks as complete
const deleteBtn=taskItem.querySelector('.deleteBtn')
deleteBtn.addEventListener('click', deleteTask)
}


function deleteTask(event){
    event.stopPropogation();
    const taskItem=this.parentElement;
    taskList.removeChild(taskItem);
}

