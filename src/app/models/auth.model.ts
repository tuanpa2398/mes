export type LoginData = {
    username: string;
    password: string;
}

export type AppUserAuth = {
    id: number;
    first_name?: string | null;
    last_name?: string | null;
    email: string; 
    avatar?: string | null;
    plant?: string | null;
    role?: string | null;
    branch?: string | null;
    permissions: string[];
}