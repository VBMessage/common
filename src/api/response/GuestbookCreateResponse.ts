import { IsString } from 'class-validator';

export class GuestbookCreateResponse {
    @IsString()
    public guestbookKey!: string;
}
