import { TimestampedModel } from './TimestampedModel';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserState } from '../enum';

export class UserData extends TimestampedModel {
    @IsString()
    public id!: number;

    @IsOptional()
    @IsString()
    public password?: string;

    @IsString()
    @IsNotEmpty()
    public mailAddress!: string;

    @IsString()
    @IsOptional()
    public name!: string;

    @IsNumber()
    @IsOptional()
    public pictureId?: number;

    @IsString()
    @IsOptional()
    public phone?: string;

    @IsString()
    @IsOptional()
    public phoneMobile?: string;

    @IsEnum(UserState)
    public state!: UserState;
}
