const isSeller = name => name[name.length - 1] === 'm';

export default (name, graph) => {
  const iter = (waited, visited) => {
    if (waited.length === 0) {
      return false;
    }
    const [current, ...rest] = waited;
    if (visited.has(current)) {
      return iter(rest, visited);
    }
    if (isSeller(current)) {
      console.log(`${current} is a mango seller!`);
      return true;
    }
    visited.add(current);
    const newPersons = graph[current];
    return iter([...rest, ...newPersons], visited);
  };
  return iter(graph[name], new Set());
};
