/// <reference types="node" />
import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import { GeneralEvents, DiscordEvents } from "./enums/CommonEvents.js";
import { EventEmitter } from "node:events";
import { EventTypes } from "./enums/EventTypes.js";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    GeneralEvents: typeof GeneralEvents;
    DiscordEvents: typeof DiscordEvents;
    EventTypes: typeof EventTypes;
    static events: EventEmitter;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
    getEventEmitter(): EventEmitter;
    abstract bind(eventName: GeneralEvents | DiscordEvents | string, type: EventTypes): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}
export default BaseApp;
