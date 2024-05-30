class TaskApp {

   constructor(tasks){
    this.taskList = tasks;       // where  is taskList declared to use this-keyword
    this.taskEl = document.getElementById('tasks');
    this.addTaskButton = document.getElementById('add-task-button');
    this.addTaskInput= document.getElementById('add-task-input');
    this.createUI();
   }

   createUI(){

    this.taskEl.innerHTML = '';                //<-- clear the taskEl div
    this.taskList.forEach((task) =>{

        //creating task div
        const taskDiv = document.createElement('div');
        taskDiv.setAttribute('class','task');

       //creating task title
       const taskTitle = document.createElement('div'); //<-- create div to hold task title
       taskTitle.setAttribute('class','task-title');    //<-- add class to task title
       taskTitle.innerHTML =  task.title;                //  <-- add content to task title from task property
       taskDiv.appendChild(taskTitle);                  //<-- append/insert task title div into task div
       
       //creating task-description div and append to task div
       const taskDescription = document.createElement('div');
       taskDescription.setAttribute('class','task-desc');
       taskDescription.innerHTML = task.description;
       taskDiv.appendChild(taskDescription);

       const taskDate = document.createElement('div');
       taskDate.setAttribute('class','task-date');
       taskDate.innerHTML = 'Created On ->  ' + new Date(task.createdOn).toLocaleDateString('en-GB');
       taskDiv.appendChild(taskDate);

       const taskTerm = document.createElement('div');
       taskTerm.setAttribute('class','task-term');
       taskTerm.innerHTML ='Execution time -> ' + task.term;
       taskDiv.appendChild(taskTerm);


       //creating task-options div and append to task div

       const taskOptions = document.createElement('div');
       taskOptions.setAttribute('class','task-options');

       const editButton = document.createElement('button');
       editButton.setAttribute('class','button edit-button');
        editButton.innerHTML = 'Edit';
        taskOptions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class','button delete-button');
        deleteButton.innerHTML = 'Delete';
        taskOptions.appendChild(deleteButton);

        taskDiv.appendChild(taskOptions);
       

       this.taskEl.appendChild(taskDiv); //


    });
   }


   addTask(task){
       
    if(task.description != ''){ this.taskList.push(task);
        this.createUI();
        this.addTaskInput.value = ''; //<-- clear the addTaskInput field after adding a new task

    }else{
        alert(" Description is empty !!! ")
    }
      
   }


   deleteTask(id){
       this.taskList = this.taskList.filter(task => task.id!== id);
   }




}

const tasks = new TaskApp([
    {title: 'Task 1',
    description: 'Task 1 description',
    createdOn: Date.now(),
    term:'1 day',
    id:Math.random()
},
{
    title: 'Task 2',
    description: 'Task 2 description',
    createdOn: Date.now(),
    term:'2 day',
    id:Math.random()
},
{
    title: 'Task 3',
    description: 'Task 3 description',
    createdOn: Date.now(),
    term:'5 day',
    id:Math.random()
}
]);


tasks.addTaskButton.addEventListener('click',function(){
tasks.addTask({
    title: 'Task ' + (Object.keys(tasks.taskList).length + 1),
    description: tasks.addTaskInput.value,
    createdOn: Date.now(),
    term: Math.floor(Math.random() * 10) +' day',
    id:Math.random()
})
})



