import BaseApp from "./BaseApp.js";
import { DiscordEvents, GeneralEvents } from "./enums/CommonEvents.js";
import { EventTypes } from "./enums/EventTypes.js";
declare class App extends BaseApp {
    loadedEvents: any[];
    events: any[];
    constructor();
    init(): Promise<void>;
    bind<T extends string>(eventName: GeneralEvents | DiscordEvents | T, type?: EventTypes): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}
export default App;
