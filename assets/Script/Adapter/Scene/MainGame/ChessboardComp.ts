const {ccclass, property} = cc._decorator;

@ccclass
export default class ChessboardComp extends cc.Component {
    @property({type: cc.Prefab, visible: true})
    private _cardPrefab: cc.Prefab;

}