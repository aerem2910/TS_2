class FloydWarshall {
    // Инициализация графа, представленного матрицей смежности
    graph: number[][];
  
    constructor(graph: number[][]) {
      this.graph = graph;
    }
  
    // Реализация алгоритма Флойда-Уоршелла
    floydWarshall(): number[][] {
      const dist = [...this.graph];
  
      for (let k = 0; k < this.graph.length; k++) {
        for (let i = 0; i < this.graph.length; i++) {
          for (let j = 0; j < this.graph.length; j++) {
            if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
              dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
          }
        }
      }
      return dist;
    }
  }
  
  // Пример использования
  const graph = [
    [0, 3, Infinity, Infinity],
    [2, 0, Infinity, 1],
    [Infinity, 7, 0, 2],
    [6, Infinity, 4, 0]
  ];
  
  const floyd = new FloydWarshall(graph);
  const shortestPaths = floyd.floydWarshall();
  console.log(shortestPaths);
  