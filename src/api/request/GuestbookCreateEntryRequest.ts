import type { GuestbookEntryData } from '../../model';
import { IsOptional, IsString } from 'class-validator';

export class GuestbookCreateEntryRequest {
    public entryData!: Pick<GuestbookEntryData, 'content' | 'assets'>;

    @IsString()
    @IsOptional()
    public guestName?: string;

    @IsString()
    @IsOptional()
    public guestMailAddress?: string;
}
