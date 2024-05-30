class TaskApp {
    constructor(tasks) {
      this.taskList = tasks;
      this.taskEl = document.getElementById('tasks');
      this.addTaskBtn = document.getElementById('addTaskBtn');
      this.addTaskInput = document.getElementById('addTaskInput');
      this.createUI();
    }
    createUI() {
      this.taskEl.innerHTML = '';
      this.taskList.forEach((task) => {
        const taskNode = document.createElement('div');
        taskNode.setAttribute('class', 'task');
        const span = document.createElement('span');
        span.innerHTML = task.description;
        taskNode.appendChild(span);
        const dateNode = document.createElement('p');
        dateNode.setAttribute('class', 'date');
        dateNode.innerText = new Date(task.createdOn).toLocaleDateString('en-GB');
        taskNode.appendChild(dateNode);
       const buttonGroup= document.createElement('div')
       buttonGroup.innerHTML=`
       <button>Edit</button> <button class='error'>Delete</button>
       `
       buttonGroup.setAttribute('class', 'button-group');
       taskNode.appendChild(buttonGroup)
        this.taskEl.appendChild(taskNode);
      });
    }
    addTask(task) {
      this.taskList.unshift(task);
      this.createUI();
      this.addTaskInput.value = '';
    }
  }
  const tasks = new TaskApp([
    {
      description: 'Eat some food ',
      createdOn: Date.now(),
      id: Math.random(),
    },
    {
      description: 'Go to work',
      createdOn: Date.now(),
      id: Math.random(),
    },
    {
      description: 'have break fast',
      createdOn: Date.now(),
      id: Math.random(),
    }
  ]);
  
  tasks.addTaskBtn.addEventListener('click', function () {
    tasks.addTask({
      id: Math.random(),
      description: tasks.addTaskInput.value,
      createdOn: Date.now(),
    });
  });