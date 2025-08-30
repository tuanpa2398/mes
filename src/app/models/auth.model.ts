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

export type LoginResponse = {
    status: boolean;
    access_token: string;
    refresh_token: string;
    user: AppUserAuth;
    message: string;
}

export type SystemUserResponse = {
    status: boolean;
    user: AppUserAuth;
    message: string;
}

export type RefreshTokenResponse = {
    status: boolean;
    access_token: string;
    refresh_token: string;
}