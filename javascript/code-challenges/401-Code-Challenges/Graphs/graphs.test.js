// Write tests to prove the following functionality:

// Node can be successfully added to the graph
// An edge can be successfully added to the graph
// A collection of all nodes can be properly retrieved from the graph
// All appropriate neighbors can be retrieved from the graph
// Neighbors are returned with the weight between nodes included
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned

const { Graph, Edge } = require('./graphs.js');

describe('Graph Tests', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addNode('A');
    expect(vertex.value).toEqual('A');
  });
  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertexA = graph.addNode('A');
    const vertexB = graph.addNode('B');
    graph.addEdge(vertexA, vertexB, 10);
    expect(graph.getNeighbors(vertexA)).toEqual([new Edge(vertexB, 10)]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    const vertexA = graph.addNode('A');
    const vertexB = graph.addNode('B');
    graph.addEdge(vertexA, vertexB, 10);
    expect(graph.getNodes()).toEqual(new Map([[vertexA, [new Edge(vertexB, 10)]], [vertexB, []]]));
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    const vertexA = graph.addNode('A');
    const vertexB = graph.addNode('B');
    const vertexC = graph.addNode('C');
    graph.addEdge(vertexA, vertexB, 10);
    graph.addEdge(vertexA, vertexC, 20);
    expect(graph.getNeighbors(vertexA)).toEqual([new Edge(vertexB, 10), new Edge(vertexC, 20)]);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();
    const vertexA = graph.addNode('A');
    const vertexB = graph.addNode('B');
    const vertexC = graph.addNode('C');
    graph.addEdge(vertexA, vertexB, 10);
    graph.addEdge(vertexA, vertexC, 20);
    expect(graph.getNeighbors(vertexA)).toEqual([new Edge(vertexB, 10), new Edge(vertexC, 20)]);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    const vertexA = graph.addNode('A');
    const vertexB = graph.addNode('B');
    const vertexC = graph.addNode('C');
    graph.addEdge(vertexA, vertexB, 10);
    graph.addEdge(vertexA, vertexC, 20);
    expect(graph.size()).toEqual(3);
  });
  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    const vertexA = graph.addNode('A');
    expect(graph.getNodes()).toEqual(new Map([[vertexA, []]]));
  });
});
