const taskInput = document.getElementById("task_input");

const ul = document.querySelector('ul');

const addBtn = document.getElementById('addbtn');

function addTask(taskNmae){
console.log(taskNmae);
const li = document.createElement('li');
li.innerHTML = ` <p>${taskNmae}</p>
<button class="edit">Edit</button>
<button class="status">Status Change</button>
<button class="delete">Delete</button>`;
ul.prepend(li)
}

taskInput.addEventListener('keypress', function(e){
    const taskNmae = e.target.value;
    if(taskNmae && e.key == "Enter"){
        addTask(taskNmae)
    }
})
addBtn.addEventListener('click', ()=> {
    const taskNmae = taskInput.value;
    if(taskNmae){
        addTask(taskNmae)
    }
})

ul.addEventListener('click', function(e){
    const targetEl = e.target;
    if(targetEl.className === 'delete'){
        targetEl.parentElement.remove()
    }
    if(targetEl.className === 'status'){
        console.log("imran");
        targetEl.parentElement.firstElementChild.classList.toggle('completed')
    }
    if(targetEl.className === 'edit'){
        
       const taskNameEl = targetEl.parentElement.firstElementChild;
       const input = document.createElement('input');


       input.addEventListener('keypress',function(e)
       {
        const newTaskName = e.target.value;
        if(newTaskName && e.key === "Enter"){
            taskNameEl.innerHTML = newTaskName;
        }
       })
       input.value = taskNameEl.textContent;
       taskNameEl.innerHTML = '';
       taskNameEl.appendChild(input);
    }
})