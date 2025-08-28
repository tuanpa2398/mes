export type LoginData = {
    pattern: string;
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

export type AuthLoginResponse = {
    id: number;
	username: string;
	role: string;
	first_name: string; 
    last_name: string;
    email: string; 
    avatar: string;
    plantL: string;
    branch: string;
}

export type LoginResponse = {
    status: boolean;
    access_token: string;
    refresh_token: string;
    user: AuthLoginResponse;
}

export type RefreshTokenResponse = {
    status: boolean;
    access_token: string;
    refresh_token: string;
}