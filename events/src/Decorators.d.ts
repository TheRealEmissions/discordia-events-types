import { GeneralEvents, DiscordEvents } from "./enums/CommonEvents.js";
import { EventTypes } from "./enums/EventTypes.js";
declare class Decorators {
    static bind<T extends string>(eventName: GeneralEvents | DiscordEvents | T, type?: EventTypes): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}
export default Decorators;
