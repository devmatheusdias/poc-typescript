import { db } from "@/configs/databaseConnection";
import { Responsible, createResponsible } from "@/protocols/responsibleProtocol";

async function findByName(name:string) {
    const responsibles = await db.query<Responsible>(`SELECT * FROM responsible WHERE name=$1;`, [name])
    return responsibles.rows[0];
    
}

async function create(name: string, email: string, password: string) {
    await db.query<createResponsible>(`INSERT INTO responsible (name, email, password) VALUES ($1, $2, $3);`, [name, email, password])
}

export const responsibleRepository = {findByName,create}