export declare class AuthService {
    login(email: string, password: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
