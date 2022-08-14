import {AdjListGraph} from "../Core/DataStructure/Graph/AdjListGraph";

export interface UCard {
    uniqueId: number;
}

export abstract class UChessboard {
    private _resolvingCards: Set<UCard>;
    private _originalResolvingCards: AdjListGraph<UCard>;

    private _handCards: Array<UCard>;
    private _drawingCards: Array<UCard>;

    constructor() {
        this._handCards = new Array<UCard>();
        this._drawingCards = new Array<UCard>();

        this._originalResolvingCards = new AdjListGraph<UCard>();
        this._resolvingCards = new Set<UCard>();
    }

    /**
     * 获取当前顶部手牌
     * @returns
     */
    public get topHandCard(): UCard {
        if (this._handCards.length === 0) return null;
        return this._handCards[~0];
    }

    /**
     * 判断抽卡区是否为空
     */
    public get isDrawingCardsEmpty(): boolean {
        return this._drawingCards.length === 0;
    }

    /**
     * 是否所有在消除区的卡片被消除
     */
    public get isResolvingCardsEmpty(): boolean {
        return this._resolvingCards.size === 0;
    }

    /**
     * 是否手牌区没牌
     */
    public get isHandCardEmpty(): boolean {
        return this._handCards.length === 0;
    }

    /**
     * 获取消除区顶部的卡牌数组（已翻面）
     */
    public getTopResovlingCard(): UCard[] {
        let arr = new Array<UCard>();
        this._resolvingCards.forEach((card) => {
            let outDegree = this._originalResolvingCards.outDegree(card);
            if (outDegree == 0) {
                arr.push(card);
                return;
            }

            let outCards = this._originalResolvingCards.getOutVertexList(card);
            let isTopCard = true;
            for (let outCard of outCards) {
                if (this._resolvingCards.has(outCard)) {
                    isTopCard = false;
                    break;
                }
            }
            if (isTopCard)
                arr.push(card);

        });
        return arr;
    }

    /**
     * 检查是否当前卡牌是在消除区的顶部
     * @param card
     */
    public isTopCardOnResolvingCards(card: UCard): boolean {
        if (!this._resolvingCards.has(card)) return false;

        return this._originalResolvingCards.getOutVertexList(card).filter((v, i) => this._resolvingCards.has(v)).length === 0;
    }

    /**
     * 从抽卡区里面就抽取一张卡
     * @returns
     */
    public drawCard(): boolean {
        if (this.isDrawingCardsEmpty) return false;
        this._handCards.push(this._drawingCards.pop());
        return true;
    }

    /**
     * 将手牌回退回抽卡区
     */
    public disDrawCard(): boolean {
        if (!this.isHandCardEmpty) return false;
        this._drawingCards.push(this._handCards.pop());
        return true;
    }

    /**
     * 从消除区消除一张顶部卡牌（不做检测）
     * @param card
     * @returns
     */
    public resolve(card: UCard): boolean {
        if (!this._resolvingCards.has(card)) return false;
        this._resolvingCards.delete(card);
        this._handCards.push(card);
        return true;
    }

    /**
     * 反向将手牌中的卡片放回消除区
     * @returns
     */
    public disResolve(): boolean {
        let handCard = this._handCards.length === 0 ? null : this._handCards[~0];
        if (handCard === null) return false;

        if (this._resolvingCards.has(handCard)) return false;

        //检查是否是原始的消除区的牌
        if (!this._originalResolvingCards.hasVex(handCard)) return false;

        this._handCards.pop();
        this._resolvingCards.add(handCard);

        return true;
    }

    /**
     * 判断是否是死局
     * @returns
     */
    public checkIsOver(): boolean {
        if (!this.isResolvingCardsEmpty && this.isDrawingCardsEmpty) {
            let handCard = this.topHandCard;
            let resolvingCards = this.getTopResovlingCard();

            if (handCard && resolvingCards.length > 0) {
                let isResovlable = false;
                for (let i = 0; i < resolvingCards.length; i++) {
                    let card = resolvingCards[i];
                    if (this.checkIsCardResovlable(card, handCard)) {
                        isResovlable = true;
                        break
                    }
                }

                if (!isResovlable) return true;
            }
        }
        return false;
    }

    /**
     * 检查目标卡牌是否能被当前的比较卡牌消除
     * @param targetCard 目标卡牌
     * @param comparedCard 比较的卡牌
     * @returns
     */
    public abstract checkIsCardResovlable(targetCard: UCard, comparedCard: UCard): boolean;
}

