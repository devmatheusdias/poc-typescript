import { errors } from "@/errors/errors";
import { taskRepository } from "@/repositories/tasksRepository";

async function  getTask(name:string) {
    const task = await taskRepository.findByName(name);
    if(!task) throw errors.notFound("task")

    console.log(task);
}

async function getAllTasks() {
    const tasks = await taskRepository.getAllTasks();
    if(tasks.length === 0) throw errors.notFound("tasks")
    console.log(tasks)
}

async function create(name: string, description: string, date: string, responsible_id: number, status: boolean, token: string) {
    
    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const task = await taskRepository.findByName(name);
    if(task) throw errors.conflict("task")

    await taskRepository.create(name, description, date, responsible_id, status);
}

async function edit(id: number, name: string | undefined, description: string | undefined, date: string | undefined, status: string | undefined) {
    console.log(description)
    const task = await taskRepository.findById(id);
    if(!task) throw errors.notFound("task")
    
    await taskRepository.edit(id,name,description,date,status)

}

async function updateTask(name: string) {
    const task = await taskRepository.findByName(name);
    if(!task) throw errors.notFound("task")

    await taskRepository.updateTask(name)
}


export const taskService = {create, updateTask, getTask, getAllTasks, edit}