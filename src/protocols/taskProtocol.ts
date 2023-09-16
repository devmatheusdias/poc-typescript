export type Task = {
    id: number
    name: string;
    description: string;
    date: string;
    responsible_id: number;
    status: boolean
}


export type createTask = Omit <Task, "id">