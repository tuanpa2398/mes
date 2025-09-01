export type ApiResponseData = {
    status: boolean;              // tương ứng với boolean
    message: string;              // tương ứng với String
    timestamp: number;            // tương ứng với long
    data: Record<string, object>;    // tương ứng với Map<String, Object>
};