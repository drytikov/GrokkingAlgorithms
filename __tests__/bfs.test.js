import search from '../src/algotithms/bfs';

const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];

test('Search', () => {
  expect(search('you', graph)).toBe(true);
});
