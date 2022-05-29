export interface JwtAuthenticationToken {
    id: string;
    email: string;
    lastName: string;
    firstName: string;
    longExpire: number;
    exp?: number;
}
