import search from '../src/algotithms/dijkstrasAlgorithm';

const graph = {};
graph.start = {};
graph.start.a = 5;
graph.start.c = 2;

graph.a = {};
graph.a.d = 2;
graph.a.b = 4;

graph.b = {};
graph.b.d = 6;
graph.b.fin = 3;

graph.c = {};
graph.c.a = 8;
graph.c.d = 7;

graph.d = {};
graph.d.fin = 1;

graph.fin = {};

const costs = {};
costs.start = 0;
costs.a = Infinity;
costs.c = Infinity;
costs.b = Infinity;
costs.d = Infinity;
costs.fin = Infinity;

const parents = {};

const result = {
  start: 0, a: 5, b: 9, c: 2, d: 7, fin: 8,
};

test('Search by dijkstrasAlgorithm', () => {
  expect(search(costs, graph, parents)).toEqual(result);
});
