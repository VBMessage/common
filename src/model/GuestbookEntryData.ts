import { TimestampedModel } from './TimestampedModel';
import { IsArray, IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { CommentData } from './CommentData';

export class GuestbookEntryData extends TimestampedModel {
    @IsNumber()
    public id!: number;

    @IsNumber()
    public guestbookId!: number;

    @IsNumber()
    public authorId!: number;

    @IsString()
    public content!: string;

    @IsArray()
    public assets!: number[];

    @IsArray()
    public likes!: number;

    @IsObject()
    @ValidateNested()
    public comments!: CommentData;
}
