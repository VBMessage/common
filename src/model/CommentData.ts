import { TimestampedModel } from './TimestampedModel';
import { IsNumber, IsString } from 'class-validator';

export class CommentData extends TimestampedModel {
    @IsNumber()
    public id!: number;

    @IsNumber()
    public entryId!: number;

    @IsNumber()
    public authorId!: number;

    @IsString()
    public content!: string;
}
