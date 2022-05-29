import { IsDate, IsOptional } from 'class-validator';

export class TimestampedModel {
    @IsDate()
    @IsOptional()
    public createdAt?: Date;

    @IsDate()
    @IsOptional()
    public updatedAt?: Date;
}
