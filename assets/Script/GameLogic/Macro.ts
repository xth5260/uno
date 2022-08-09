export namespace UDefine {
    /**
     * 卡牌类型
     */
    export enum CardType {
        /**
         * 有色数字卡
         */
        ColorDigit = 1,
        /**
         * 有色卡
         */
        Color = 2,
        /**
         * 无色卡
         */
        NoColor = 3,
        /**
         * 有色加卡
         */
        ColorPlus = 4,
        /**
         * 有色减卡
         */
        ColorMinus = 5,
        /**
         * 无色加卡
         */
        NoColorPlus = 6,
        /**
         * 无色减卡
         */
        NoColorMinus = 7,
    }

    /**
     * 卡牌颜色
     */
    export enum CardColor {
        None = 0,
        Red = 1,
        Yello = 2,
        Blue = 3,
        Green = 4,
    }
}

export namespace UConst {
    /**
     * 卡牌可用点数集合
     */
    export const cardNumSets: ReadonlySet<number> = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);


}