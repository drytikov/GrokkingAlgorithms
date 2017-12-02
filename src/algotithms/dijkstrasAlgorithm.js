const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.has(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

export default (costs, graph, parents) => {
  const resultCosts = costs;
  const resultParents = parents;
  const emptyProcessed = new Set();
  const firstNode = findLowestCostNode(resultCosts, emptyProcessed);
  const iter = (node, curProcessed) => {
    if (node === null) {
      return resultCosts;
    }
    const cost = resultCosts[node];
    const neighbors = graph[node];
    Object.keys(neighbors).forEach((neighborsNode) => {
      const newCost = cost + neighbors[neighborsNode];
      if (resultCosts[neighborsNode] > newCost) {
        resultCosts[neighborsNode] = newCost;
        resultParents[neighborsNode] = node;
      }
    });
    curProcessed.add(node);
    const nextNode = findLowestCostNode(resultCosts, curProcessed);
    return iter(nextNode, curProcessed);
  };
  return iter(firstNode, emptyProcessed);
};
