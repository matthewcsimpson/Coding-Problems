const validPath = (n, edges, source, dest) => {
  if (n === 1) {
    return true;
  }
  if (source === dest) {
    return true;
  }

  let adj = {};
  let visited = [];

  for (const edge of edges) {
    adj[edge[0]] ? adj[edge[0]].push(edge[1]) : (adj[edge[0]] = [edge[1]]);

    adj[edge[1]] ? adj[edge[1]].push(edge[0]) : (adj[edge[1]] = [edge[0]]);
  }

  const list = [source];
  visited[source] = true;

  while (list.length) {
    const currentSpot = list.pop();
    if (currentSpot === dest) {
      return true;
    }
    for (let neighbour of adj[currentSpot]) {
      if (!visited[neighbour]) {
        list.push(neighbour);
        visited[neighbour] = true;
      }
    }
  }

  return false;
};

module.exports = validPath;
