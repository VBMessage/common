import type { GuestbookData, UserData } from '../../model';

export class GuestbookCreateRequest {
    public userData!: Pick<UserData, 'mailAddress'>;
    public guestbookData!: Pick<GuestbookData, 'eventType' | 'name1' | 'name2'>;
}
