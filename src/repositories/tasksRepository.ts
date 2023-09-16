import { db } from "@/configs/databaseConnection";
import { Task, createTask} from "@/protocols/taskProtocol"

async function findByName(name:string) {
    const tasks = await db.query<Task>(`SELECT * FROM task WHERE name=$1;`, [name])
    return tasks.rows[0];
}

async function create(name: string, description: string, date: string, responsible_id: number, status: boolean) {
    await db.query<createTask>(`INSERT INTO task (name, description, date, responsible_id, status) VALUES ($1, $2, $3, $4, $5);`, [name, description, date, responsible_id, status])
}

async function deleteTask(name: string){
    await db.query<createTask>(`DELETE FROM task WHERE name = $1`, [name])
}


export const taskRepository = {findByName,create, deleteTask}