import type { CommentData, GuestbookEntryData, UserData } from '../../model';

export class GuestbookEntryResponse {
    public author!: UserData;

    public entry!: GuestbookEntryData;

    public comments!: CommentData[];
}
