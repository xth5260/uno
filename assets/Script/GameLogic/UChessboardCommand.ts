import {UCard, UChessboard} from "./UChessboard";

export abstract class UChessboardCommand {
    constructor(protected readonly _chessboard: UChessboard) {

    }

    public abstract do(): void;

    public abstract undo(): void;
}

export class UChessboardResolveCommand extends UChessboardCommand {
    private _target: UCard;

    constructor(chessboard: UChessboard, card: UCard) {
        super(chessboard);
        this._target = card;
    }

    public do(): void {
        this._chessboard.resolve(this._target);

    }

    public undo(): void {
        this._chessboard.disResolve();
    }

}

export class UChessboardDrawCardCommand extends UChessboardCommand {
    constructor(chessboard: UChessboard) {
        super(chessboard);
    }

    public do(): void {
        this._chessboard.drawCard();
    }

    public undo(): void {
        this._chessboard.disDrawCard();
    }
}