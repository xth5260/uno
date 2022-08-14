export interface Graph<V> {
    vexCount: number;

    insertVex(v: V): boolean;

    deleteVex(v: V): boolean;

    hasVex(v: V): boolean;

    insertEdge(from: V, to: V): boolean;

    deleteEdge(from: V, to: V): boolean;

    hasEdge(from: V, to: V);

    inDegree(v: V): number;

    outDegree(v: V): number;

    getOutVertexList(v: V): V[];

    getInVertexList(v: V): V[];
}