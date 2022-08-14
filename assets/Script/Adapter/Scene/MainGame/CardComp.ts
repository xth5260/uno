import Component = cc.Component;
import {UCard} from "../../../GameLogic/UCard";
import Vec3 = cc.Vec3;

const {ccclass, property} = cc._decorator;

@ccclass
export class CardComp extends Component {
    @property({type: cc.Sprite, visible: true})
    private _back: cc.Sprite;
    @property({type: cc.Sprite, visible: true})
    private _front: cc.Sprite;

    private _card: UCard = null;
    private _isFront: boolean;

    init(card: UCard) {
        this._card = card;
        this.onCardChanged(this._card);

        this._isFront = true;
        this.onFrontChanged(this._isFront);
    }

    get isFront() {
        return this._isFront;
    }

    set isFront(v: boolean) {
        if (this._isFront == v) return;
        this._isFront = v;
        this.onFrontChanged(this._isFront);
    }

    private onFrontChanged(isFront: boolean) {
        this._front.enabled = isFront;
        this._back.enabled = !isFront;
    }

    private onCardChanged(card: UCard) {
        //todo: 根据card加载图片资源
    }

    set position(v: Vec3) {
        this.node.position = v;
    }

    get position() {
        return this.node.position;
    }
}