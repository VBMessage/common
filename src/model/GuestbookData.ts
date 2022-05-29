import { TimestampedModel } from './TimestampedModel';
import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';
import { EventType } from '../enum/EventType';
import { Type } from 'class-transformer';

export class GuestbookData extends TimestampedModel {
    @IsNumber()
    public id!: number;

    @IsNumber()
    public ownerId!: number;

    @IsString()
    public pageKey!: string;

    @IsEnum(EventType)
    public eventType!: EventType;

    @IsString()
    public name1!: string;

    @IsString()
    public name2!: string;

    @IsArray()
    @IsNumber()
    @Type(() => Number)
    public imageAssets!: number[];

    public homeMessage!: string;
}
