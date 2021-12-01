import { Context, PersistentMap, PersistentVector } from "near-sdk-as";

/**
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */
@nearBindgen
export class Message {
    author: string;
    timestamp: u64;
    isVip: boolean;

    constructor(public text: string) {
        this.author = Context.sender;
        this.timestamp = Context.blockTimestamp;
        this.isVip = Context.attachedDeposit.toBool();
    }
}

export const messages = new PersistentVector<Message>("msg");
export const gifts = new PersistentMap<string, u32>("gft");
export const giftHistory = new PersistentMap<string, PersistentVector<u32>>("hst");
