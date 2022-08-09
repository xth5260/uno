import { UDefine } from "./Macro";

export abstract class UCard {

    constructor(public readonly cardNo: number, public readonly cardType: UDefine.CardType, public readonly cardColor: UDefine.CardColor, public readonly num: number) {

    }
}
