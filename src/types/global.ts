

export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean
    }
    status: string
}

export type TResponse = {
    data?: any;
    error?: TError
}