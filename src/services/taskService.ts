import { errors } from "@/errors/errors";
import { taskRepository } from "@/repositories/tasksRepository";

async function create(name: string, description: string, date: string, responsible_id: number, status: boolean) {
    const task = await taskRepository.findByName(name);
    if(task) throw errors.conflict("task")

    await taskRepository.create(name, description, date, responsible_id, status);
}

async function deleteTask(name: string) {
    const task = await taskRepository.findByName(name);
    if(!task) throw errors.notFound("task")

    await taskRepository.deleteTask(name)
}


export const taskService = {create, deleteTask}