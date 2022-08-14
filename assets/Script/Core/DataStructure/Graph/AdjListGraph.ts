import {Graph} from "./Graph";

export class AdjListGraph<V> implements Graph<V> {
    private _vertexSet: Set<V>;
    private _adjListMap: Map<V, Array<V>>;

    constructor() {
        this._vertexSet = new Set<V>();
        this._adjListMap = new Map<V, Array<V>>();
    }

    get vexCount(): number {
        return this._vertexSet.size;
    }

    insertVex(v: V): boolean {
        if (this.hasVex(v)) return false;
        this._vertexSet.add(v);
        this._adjListMap.set(v, []);
        return true;
    }

    deleteVex(v: V): boolean {
        if (!this.hasVex(v)) return false;
        this._adjListMap.delete(v);
        return this._vertexSet.delete(v);
    }

    hasVex(v: V): boolean {
        return this._vertexSet.has(v);
    }

    insertEdge(from: V, to: V) {
        if (!this._adjListMap.has(from)) return false;
        let adjList = this._adjListMap.get(from);

        if (!this.hasVex(to)) return false;
        adjList.push(to);
        return true;
    }

    deleteEdge(from: V, to: V): boolean {
        if (!this._adjListMap.has(from)) return false;
        let adjList = this._adjListMap.get(from);

        let index = adjList.indexOf(to);
        if (index < 0) return false;
        adjList.splice(index, 1);
        return true;
    }

    hasEdge(from: V, to: V) {
        if (!this._adjListMap.has(from)) return false;
        let adjList = this._adjListMap.get(from);

        let index = adjList.indexOf(to);
        return index >= 0;
    }

    inDegree(v: V): number {
        let count = 0;
        this._adjListMap.forEach((adjList, k) => {
            for (let w of adjList) {
                if (w === v)
                    count++;
            }
        });
        return count;
    }

    outDegree(v: V): number {
        if (!this._adjListMap.has(v)) return 0;
        return this._adjListMap.get(v).length;
    }

    getOutVertexList(v: V): V[] {
        if (!this._adjListMap.has(v)) return [];
        return this._adjListMap.get(v).slice();
    }

    getInVertexList(v: V): V[] {
        let result = [];
        this._adjListMap.forEach((adjList, k) => {
            for (let w of adjList) {
                if (w === v)
                    result.push(k);
            }
        });
        return result;
    }


}