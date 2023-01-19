const inputNewTask = document.querySelector('.newTask');
const addNewTask = document.querySelector('.addNewTask');
const task = document.querySelector('.task');

const createTagLi = () =>{
    const li = document.createElement('li');
    return li;
}

const createDeleteButton = (li) =>{
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
}

const clearInput = () => {
    inputNewTask.value = '';
    inputNewTask.focus();
}

inputNewTask.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        if(!inputNewTask.value) return;
        createTask(inputNewTask.value);
        clearInput();
    }
})

const createTask = (textNewTask) =>{
    const li = createTagLi();
    li.innerText = textNewTask;
    task.appendChild(li);
    createDeleteButton(li);
    saveTask();
    
}

addNewTask.addEventListener('click', ()=>{
    if(!inputNewTask.value) return;
    createTask(inputNewTask.value);
    clearInput();
})

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        saveTask();
    }
})

const saveTask = ()=>{
    const TasksInLiComponent = task.querySelectorAll('li');
    const listOfTask = [];

    for(let iterateTasks of TasksInLiComponent){
        let taskText = iterateTasks.innerText;
        taskText = taskText.replace('delete', '').trim();
        listOfTask.push(taskText);
    }
    const tasksJson = JSON.stringify(listOfTask);
    localStorage.setItem('taskJSON', tasksJson);
}

const loadSaveTasks = () => {
    const tasks = localStorage.getItem('taskJSON');
    const listOfTasks = JSON.parse(tasks);
    if(listOfTasks){
        for(let task of listOfTasks){
            createTask(task);
        }
    }
}
loadSaveTasks();