declare class GeneralEvents {
    static on(message: string, ...args: string[]): void;
    static debug(message: string, ...args: string[]): void;
    static warn(message: string, ...args: string[]): void;
    static error(message: string, ...args: string[]): void;
}
export default GeneralEvents;
