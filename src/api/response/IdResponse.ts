import { IsNumber } from 'class-validator';

export class IdResponse {
    @IsNumber()
    public id!: number;
}
