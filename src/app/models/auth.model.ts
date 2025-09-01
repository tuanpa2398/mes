export type LoginData = {
    pattern: string;
    password: string;
}

export type AppCurrentUser = {
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

export type LoginDto = {
    appCurrentUser: AppCurrentUser;
    accessToken: string;
    refreshToken: string;
}


export type RefreshTokenResponseDto = {
    accessToken: string;
}