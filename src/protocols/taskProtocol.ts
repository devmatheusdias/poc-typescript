export type Task = {
    id: number
    name: string;
    description: string;
    date: Date;
    responsible: number;
    status: boolean
}


export type createTask = Omit <Task, "id">