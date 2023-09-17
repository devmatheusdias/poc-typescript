import { errors } from "@/errors/errors";
import { taskRepository } from "@/repositories/tasksRepository";

async function  getTask(name:string, responsible_id: number, token: string) {
      
    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const task = await taskRepository.findByName(name, responsible_id);
    if(!task) throw errors.notFound("task")

    console.log(task);
}

async function getAllTasks(responsible_id: number, token: string) {

       
    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const tasks = await taskRepository.getAllTasks(responsible_id);
    if(tasks.length === 0) throw errors.notFound("tasks")
    console.log(tasks)
}

async function create(name: string, description: string, date: string, responsible_id: number, status: boolean, token: string) {
    
    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const task = await taskRepository.findByName(name, responsible_id);
    if(task) throw errors.conflict("task")

    await taskRepository.create(name, description, date, responsible_id, status);
}

async function edit(id: number, name: string | undefined, description: string | undefined, date: string | undefined, status: string | undefined, responsible_id: number, token: string) {
    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const task = await taskRepository.findById(id);
    if(!task) throw errors.notFound("task")
    if(task.responsible_id != responsible_id) throw errors.unauthorized()

    
    await taskRepository.edit(id,name,description,date,status, responsible_id)

}

async function finishTask(name: string, responsible_id: number, token: string) {

    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const task = await taskRepository.findByName(name, responsible_id);
    if(!task) throw errors.notFound("task")

    if(task.responsible_id != responsible_id) throw errors.unauthorized()

    await taskRepository.finishTask(name, responsible_id)
}

async function deleteTask(id: number, responsible_id: number, token: string){
    const existToken = await taskRepository.getToken(token)
    if(!existToken) throw errors.unauthorized()

    const task = await taskRepository.findByNameFinishedTasks(id, responsible_id);
    if(!task) throw errors.notFound("task")

    if(task.responsible_id != responsible_id) throw errors.unauthorized();

    await taskRepository.deleteTask(id, responsible_id);
}


export const taskService = {create, getTask, getAllTasks, edit, finishTask, deleteTask}