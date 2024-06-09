/*1) you used -  e.target.getAttribute('data-task-id') --(i think here you work with event object)
              instead of document.querySelector('#saveBtn').getAttribute('data-task-id'),
      - which one is the best approach and why?
      
  2)you used property from class and outside of it for the same element 
          const taskInput = document.getElementById('taskInput');  --out of class
           this.editTaskInput = document.getElementById("taskInput");  -- as properti of class
           
  3) which is deference between "document.getElementById("#id")" and "querySelector("#id")"
*/


import { initialTasks } from "./data.js";

const taskInput = document.getElementById('taskInput');

class TaskApp {
  constructor(tasks) {
    this.taskList = tasks; // where  is taskList declared to use this-keyword
    this.taskEl = document.getElementById("tasks");
    this.addTaskButton = document.getElementById("add-task-button");
    this.addTaskInput = document.getElementById("add-task-input");
    this.editTaskInput = document.getElementById('taskInput');
    this.editTaskInput = document.getElementById("taskInput");
    this.createUI();
  }

  createUI() {
    this.taskEl.innerHTML = ""; //<-- clear the taskEl div
    this.taskList.forEach((task) => {
      //creating task div
      const taskDiv = document.createElement("div");
      taskDiv.setAttribute("class", "task");
      taskDiv.setAttribute("data-id", task.id);

      taskDiv.innerHTML += `
           
           <div class="task-title">${task.title}</div>
           <div class="task-desc">${task.description}</div>
           <div class="task-date">Created On ->  ${new Date(
             task.createdOn
           ).toLocaleDateString("en-GB")}</div>
           <div class="task-term">Execution time -> ${task.term}</div>  

           <div class="task-options">
                <button class="button delete-button" id="deleteBtn">Delete</button>
                <button class="button edit-button" id="editBtn"
                data-bs-toggle="modal"
                 data-bs-target="#editModal">Edit</button>
           </div>

        
 `;

      taskDiv.querySelector("#deleteBtn").addEventListener("click", () => {
        this.deleteTask(taskDiv.getAttribute("data-id"));
      });


      taskDiv.querySelector("#editBtn").addEventListener('click', () =>{
      taskInput.value = this.findById(task.id).description;
      document.querySelector('#saveBtn').setAttribute('data-id',task.id);
    

   });

      



      this.taskEl.appendChild(taskDiv); //
    });


  }

  addTask(task) {
    if (task.description != "") {
      this.taskList.push(task);
      this.createUI();
      this.addTaskInput.value = ""; //<-- clear the addTaskInput field after adding a new task
    } else {
      alert(" Description is empty !!! ");
    }
  }

  editTask(taskId,description){
      const newList = this.taskList.map((task) => {
        if(task.id == taskId){
             task.description = description;
             return task;
        }
        return task;

      });


      this.taskList = newList;
      this.createUI();
  }

  findById(taskId){
    return this.taskList.find((task) => {
      if(task.id == taskId){
           return task;
      }

    })
  }
 


  deleteTask(taskId) {
    const filterList = this.taskList.filter((task) => {
      if (task.id != taskId) return task;
    });
    this.taskList = filterList;
    this.createUI();
  }
}

const tasks = new TaskApp(initialTasks);

tasks.addTaskButton.addEventListener("click", function () {
  tasks.addTask({
    title: "Task " + (Object.keys(tasks.taskList).length + 1),
    description: tasks.addTaskInput.value,
    createdOn: Date.now(),
    term: Math.floor(Math.random() * 10) + " day",
    id: Math.random(),
  });
});


document.querySelector('#saveBtn').addEventListener('click',() =>{
 tasks.editTask(
  document.querySelector('#saveBtn').getAttribute('data-id'),
  tasks.editTaskInput.value
 )

});

