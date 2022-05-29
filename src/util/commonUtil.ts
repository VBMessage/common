// eslint-disable-next-line @typescript-eslint/ban-types

export function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function enumValues<O extends object>(obj: O): O[keyof O][] {
    return enumKeys(obj).map((key) => obj[key]);
}

/**
 * @param stop Last number of this range, exclusive
 * @return a range of numbers from 0 to stop - 1
 */
export function range(stop: number): number[];
/**
 * @param start First number
 * @param stop Last number of this range, exclusive
 * @return a range of numbers from start to stop - 1
 */
export function range(start: number, stop: number): number[];
/**
 * @param start First number
 * @param stop Last number of this range, exclusive
 * @param step step from one number to the next
 * @return a range of numbers from start to stop - 1
 */
export function range(start: number, stop: number, step: number): number[];
export function range(stopOrStart: number, stop?: number, step = 1): number[] {
    const start = typeof stop !== 'undefined' ? stopOrStart : 0;
    const _stop = (stop ? stop : stopOrStart) - 1;

    return Array.from({ length: (_stop - start) / step + 1 }, (_, i) => start + i * step);
}

// noinspection NonAsciiCharacters
const replacements = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    ß: 'ss'
};

function cleanString(value: string): string {
    for (const char of Object.keys(replacements)) {
        // @ts-ignore
        value = value.replace(char, replacements[char]);
    }

    value = value.replace(/[-_]/g, ' ');
    value = value.trim();
    value = value.replace(/[^\w\d ]/g, '');
    value = value.replace(/[\s]+/g, ' ');
    value = value.replace(/ /g, '-');

    return value.toLowerCase();
}

export function buildPageKey({ name1, name2 }: { name1: string; name2: string }): string {
    return cleanString(`${name1}-${name2}`);
}
