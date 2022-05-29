// eslint-disable-next-line @typescript-eslint/ban-types
export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
export type ClassProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
