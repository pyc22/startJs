import { getId } from "./utils.js";




export const initialTasks = [
    {title: 'Task 1',
    description: 'Task 1 description',
    createdOn: Date.now(),
    term:'1 day',
    id:getId()
},
{
    title: 'Task 2',
    description: 'Task 2 description',
    createdOn: Date.now(),
    term:'2 day',
    id:getId()
},
{
    title: 'Task 3',
    description: 'Task 3 description',
    createdOn: Date.now(),
    term:'5 day',
    id:getId()
}
];
