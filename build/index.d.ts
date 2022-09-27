declare function _<T extends HTMLElement>(selector: string): {
    get: () => T | null;
    innerHTML: string | undefined;
    show: () => void;
    hidden: () => void;
    addEvent: <K extends keyof HTMLElementEventMap>(event: K, listener: (event: HTMLElementEventMap[K]) => void) => void;
};
declare global {
    interface Response<DataType = any> extends Body {
        json(): Promise<DataType>;
    }
}
declare module _ {
    function fetch<DataType>(url: string, options?: RequestInit): Promise<Response<DataType>>;
    function isNull(value: unknown): boolean;
    function isNil(value: unknown): boolean;
    function isNumber(value: unknown): boolean;
    function isFunction(value: unknown): boolean;
    function shuffle<T extends unknown>(array: T[]): T[];
    function pick<T extends Record<string, unknown>, K extends keyof T>(object: T, ...keys: K[]): Pick<T, K>;
    function omit<T extends {}, K extends keyof T>(object: T, ...keys: K[]): Omit<T, K>;
    function memoize<T extends unknown[], K extends unknown>(func: (...args: T) => K, key: string): (...args: T) => K;
    function debounce(func: (...args: unknown[]) => unknown, delay: number): (...args: unknown[]) => void;
    function throttle(func: (...args: unknown[]) => unknown, delay: number): (...args: unknown[]) => void;
    function clickOutside(): void;
}
export default _;
