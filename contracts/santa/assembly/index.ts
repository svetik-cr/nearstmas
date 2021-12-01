import { Context, math, PersistentVector } from "near-sdk-as";
import { giftHistory, gifts, Message, messages } from './model';

// near call $CONTRACT_NAME addMessage '{"text":"..."}' --accountId vlodkow.testnet
export function addMessage(text: string): void {
    assert(text.length > 1, "Please write message!");

    const newMessage = new Message(text);
    messages.push(newMessage);
}

// near call $CONTRACT_NAME myMessages '' --accountId vlodkow.testnet
export function myMessages(): Array<Message> | null {
    const result = new Array<Message>();

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].author == Context.sender) {
            result.push(messages[i]);
        }
    }
    return result;
}

// near view $CONTRACT_NAME allMessages '' --accountId vlodkow.testnet
export function allMessages(): Array<Message> | null {
    const result = new Array<Message>();

    for (let i = 0; i < messages.length; i++) {
        result.push(messages[i]);
    }
    return result;
}

// near call $CONTRACT_NAME myGift '' --accountId vlodkow.testnet
export function myGift(): u32 {
    if (gifts.contains(Context.sender)) {
        return gifts.getSome(Context.sender);
    }
    return 0;
}

export function myGiftHistory(): Array<u32> {
    const result = new Array<u32>();
    if (giftHistory.contains(Context.sender)) {
        const list = giftHistory.getSome(Context.sender);
        for (let i = 0; i < list.length; i++) {
            result.push(list[i]);
        }
    }
    return result;
}

// near call $CONTRACT_NAME addGift '{"id":1}' --accountId vlodkow.testnet
export function addGift(id: u32): void {
    gifts.set(Context.sender, id);

    let myHistory = giftHistory.contains(Context.sender) ? giftHistory.getSome(Context.sender) : new PersistentVector<u32>("ng");
    if (!myHistory.length || myHistory.last != id) {
        myHistory.push(id);
        giftHistory.set(Context.sender, myHistory);
    }
}

export function santaSay(): string {
    const texts = [
        'Christmas is a baby shower that went totally overboard.',
        'Santa Claus has the right idea. Visit people only once a year.',
        'My husband’s idea of getting the Christmas spirit is to become Scrooge.',
        'Once again, we come to the Holiday Season, a deeply religious time that each of us observes, in his own way, by going to the mall of his choice.',
        'I get a little behind during Lent, but it comes out even at Christmas.',
        'Keep your friends close, your enemies closer, and receipts for all major purchases.',
        'I haven’t taken my Christmas lights down. They look so nice on the pumpkin.',
        'This holiday season, no matter what your religion is, please take a moment to reflect on why it’s better than all the other ones.',
        'Nothing’s as mean as giving a little child something useful for Christmas.',
        'What I like about Christmas is that you can make people forget the past with the present.',
        'I love Christmas. I receive a lot of wonderful presents I can’t wait to exchange.',
        'That’s the true spirit of Christmas; people being helped by people other than me.',
        'Who’s the bane of Santa’s life? The elf and safety officer.',
        'The one thing women don’t want to find in their stockings on Christmas morning is their husband.',
        'Christmas is the season when you buy this year’s gifts with next year’s money.',
        'He who has not Christmas in his heart will never find it under a tree.'
    ]
    const rand = randomNum();
    // const rand = u128.fromF64(JSMath.floor(JSMath.random() * texts.length)).toI32();
    return texts[rand];
}

function randomNum(): u32 {
    let buf = math.randomBuffer(4);
    return (
        (((0xff & buf[0]) << 24) |
            ((0xff & buf[1]) << 16) |
            ((0xff & buf[2]) << 8) |
            ((0xff & buf[3]) << 0)) %
        16
    );
}
