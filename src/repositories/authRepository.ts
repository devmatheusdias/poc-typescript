import { db } from "@/configs/databaseConnection";
import { Responsible, createResponsible } from "@/protocols/responsibleProtocol";

async function findByEmail(email:string) {
    const responsibles = await db.query<Responsible>(`SELECT * FROM responsible WHERE email=$1;`, [email])
    return responsibles.rows[0];
    
}

async function create(name: string, email: string, password: string) {
    await db.query<createResponsible>(`INSERT INTO responsible (name, email, password) VALUES ($1, $2, $3);`, [name, email, password])
}

export const authRepository = {findByEmail,create}