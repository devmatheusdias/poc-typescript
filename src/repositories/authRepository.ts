import { db } from "@/configs/databaseConnection";
import { Responsible, createResponsible } from "@/protocols/responsibleProtocol";
import { Session } from "@/protocols/sessionProtocol";

async function findByEmail(email:string) {
    const responsibles = await db.query<Responsible>(`SELECT * FROM responsible WHERE email=$1;`, [email])
    return responsibles.rows[0];  
}

async function findById(userId:number) {
    const session = await db.query<Session>(`SELECT * FROM sessions WHERE "userID" = $1;`, [userId])
    return session.rows[0];   
}

async function getToken(token:string) {
    const result = await db.query<Session>(`SELECT * FROM sessions WHERE token = $1;`, [token]);
    return result.rows[0];
    
}

async function signUp(name: string, email: string, password: string) {
    await db.query<createResponsible>(`INSERT INTO responsible (name, email, password) VALUES ($1, $2, $3);`, [name, email, password])
}

async function signIn(userId: number, token: string) {
    await db.query<Session>(`INSERT INTO sessions ("userID", token) VALUES ($1, $2);`, [userId, token])
}

async function logout(userId: number) {
    await db.query<Session>(`DELETE FROM sessions WHERE "userID" = $1;`, [userId])
}


export const authRepository = {findByEmail, findById, getToken, signUp, signIn, logout}