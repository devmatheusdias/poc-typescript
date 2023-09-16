export type Responsible = {
    id: number
    name: string;
    email: string;
    password: string;
}

export type createResponsible = Omit <Responsible, "id">