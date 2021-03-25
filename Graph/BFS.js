class Graph {
    constructor(n) {
        this.adj = [];
        for (let i = 0; i < n; i++) {
            this.adj[i] = [];
        }
    }
    addEdge(s, t) { // 无向
        this.adj[s].push(t);
        this.adj[t].push(s);
    }
}
function print(prev, s, t) {
    if (prev[t] !== -1 && t !== s) {
        print(prev, s, prev[t]);
    }
    console.log(t + ' ');
}

Graph.prototype.bfs = function(s, t) {
    if (s === t) return;
    const visited = [];
    visited[s] = true;
    const queue = [];
    queue.push(s);
    const prev = [];
    while (queue.length) {
        const w = queue.shift();
        for (let i = 0; i < this.adj[w].length; i++) {
            const q = this.adj[w][i];
            if (!visited[q]) {
                prev[q] = w;
                if (q === t) {
                    print(prev, s, t);
                    return;
                }
                visited[q] = true;
                queue.push(q);
            }
        }
    }
}
