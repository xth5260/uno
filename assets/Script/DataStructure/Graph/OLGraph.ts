import {Graph} from "./Graph";

type EdgeNode<V> = {
    tailVex: VexNode<V>;
    headVex: VexNode<V>;

    hlink: EdgeNode<V>;
    tlink: EdgeNode<V>;
}

type VexNode<T> = {
    data: T;
}

class OLDirectedGraph<V> implements Graph {
    private vertices: Set<V>;

    get vexCount(): number {
        return 0;
    }

    getVex(index: number): V {
        return null;
    }

    indexOfVex(v: V): number {
        return -1;
    }

    getVexInDegree(v: V): number {
        return 0;
    }

    getVexOutDegree(v: V): number {
        return 0;
    }

    insertVex(v: V): void {

    }

    deleteVex(v: V): void {

    }

    deleteVexAt(index: number): void {

    }

    insertEdge(from: V, to: V): void {

    }

    deleteEdge(from: V, to: V): void {

    }

    firstInVex(v: V): V {
        return null;
    }

    nextInVex(v: V, n: V): V {
        return null;
    }

    firstOutVex(v: V): V {
        return null;
    }

    nextOutVex(v: V, n: V): V {
        return null;
    }
}


export {OLDirectedGraph}