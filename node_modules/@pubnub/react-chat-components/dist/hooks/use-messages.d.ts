import { FetchMessagesParameters } from "pubnub";
import { MessageEnvelope } from "../types";
interface MessagesByChannel {
    [channel: string]: MessageEnvelope[];
}
declare type HookReturnValue = [MessagesByChannel, () => Promise<void>, Error];
export declare const useMessages: (options: FetchMessagesParameters) => HookReturnValue;
export {};
