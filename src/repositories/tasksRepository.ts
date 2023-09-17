import { db } from "@/configs/databaseConnection";
import { Task, createTask} from "@/protocols/taskProtocol"
import { Session } from "@/protocols/sessionProtocol";

async function findByName(name:string) {
    const tasks = await db.query<Task>(`SELECT * FROM task WHERE name=$1;`, [name])
    return tasks.rows[0];
}

async function findById(id: number) {
    const tasks = await db.query<Task>(`SELECT * FROM task WHERE id=$1;`, [id])
    return tasks.rows[0];
}

async function getAllTasks() {
    const tasks =  await db.query<Task>(`SELECT * FROM task`);
    return tasks.rows;
}

async function getToken(token:string) {
    const existToken = await db.query<Session>(`SELECT * FROM sessions WHERE token = $1;`, [token]);
    return existToken.rows[0]
}

async function create(name: string, description: string, date: string, responsible_id: number, status: boolean) {
    await db.query<createTask>(`INSERT INTO task (name, description, date, responsible_id, status) VALUES ($1, $2, $3, $4, $5);`, [name, description, date, responsible_id, status])
}

async function edit(id: number, name: string, description: string, date: string, status: string) {
   
    if(name) await db.query<Task>(`UPDATE task SET name = $1 WHERE id = $2 `, [name, id])
    if(description) await db.query<Task>(`UPDATE task SET description = $1 WHERE id = $2 `, [description, id])
    if(date) await db.query<Task>(`UPDATE task SET date = $1 WHERE id = $2 `, [date, id])
    if(status) await db.query<Task>(`UPDATE task SET status = $1 WHERE id = $2 `, [status, id])
}

async function updateTask(name: string){
    await db.query<Task>(`DELETE FROM task WHERE name = $1`, [name])
}


export const taskRepository = {findByName, findById, getToken, create, updateTask, getAllTasks, edit}