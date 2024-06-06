const allBoxes= document.querySelectorAll('.box')
const allTasks=document.querySelectorAll('.task')

allTasks.forEach(task =>{
    task.addEventListener('dragstart',()=>{
        task.classList.add('is-dragging')
    })
    task.addEventListener('dragend',()=>{
        task.classList.remove('is-dragging')
    })
})

allBoxes.forEach(box => {
    box.addEventListener('dragover',(e)=>{
        e.preventDefault();
    const curTask = document.querySelector('.is-dragging')
    box.appendChild(curTask)
    })
})

const form = document.querySelector('#add-form') 
const input = document.querySelector('#todo-input') 
const todoBox = document.querySelector('#todo')

form.addEventListener('submit',e =>{
    e.preventDefault()
    const newTaskText = input.value
    if(!newTaskText) return;

     const newTask = document.createElement('p')
     newTask.classList.add('task')
     newTask.setAttribute('draggable','true')
     newTask.innerHTML= newTaskText

     newTask.addEventListener('dragstart',()=>{
        newTask.classList.add('is-dragging')
    })
    newTask.addEventListener('dragend',()=>{
        newTask.classList.remove('is-dragging')
    })
    
    
        todoBox.appendChild(newTask)
   
        input.value = ''
    
})