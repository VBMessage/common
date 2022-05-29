import type { DateTime, DurationLike } from 'luxon';

export interface ToastOptions {
    title: string;
    message: string;
    duration: DurationLike;
    icon?: string;
    iconClasses: string;
    iconContainerClasses: string;
}

export interface ToastData extends ToastOptions {
    id: number;
    created: DateTime;
    lifetimeEnd: DateTime;
}

export interface ToastContainerType {
    showToast(options: Partial<ToastOptions>): void;

    showSuccess(message: string): void;

    showInfo(message: string): void;

    showWarning(message: string): void;

    showError(message: string): void;
}
