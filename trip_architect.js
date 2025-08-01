const getElementById = (id) => document.getElementById(id);

var currentData, vertexCount, source, destination; 

const locationNames = [
    'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore', 
    'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow'
];

onload = function() {
    
    const container1 = getElementById('container1');
    const container2 = getElementById('container2');
    const getProblemButton = getElementById('get_problem');
    const solveProblemButton = getElementById('solve_problem');
    const problemText = getElementById('problem_text'); 
    
    
    const options = {
        edges: {
            labelHighlightBold: true
        },
        nodes: {
            font: '12px arial black',
            scaling: {
                label: true
            },
            shadow: true,
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf3c5', 
                size: 40,
                color: '#000080',
            }
        }
    };
    
    // For the Problem Graph
    const problemNetwork = new vis.Network(container1);
    problemNetwork.setOptions(options);
    // For the Solved Graph
    const solutionNetwork = new vis.Network(container2);
    solutionNetwork.setOptions(options);
    

    function createGraphData() {
        vertexCount = Math.min(Math.floor(Math.random() * locationNames.length) + 3, 10);

        let vertices = [];

        for (let i = 0; i < vertexCount; i++) {
            vertices.push({
                id: i,
                label: locationNames[i]
            });
        }

        let edges = [];

        // Creating a tree-like underlying graph structure 
        for (let i = 0; i < vertexCount; i++) {
            let neighbor = i;
            while (neighbor == i) neighbor = Math.floor(Math.random() * vertexCount);
            edges.push({ from: i, to: neighbor, color: 'orange', 
                        label: String(Math.floor(Math.random() * 10) + 3) });
        }

        source = Math.floor(Math.random() * vertexCount);
        destination = vertexCount - 1;
        
        while (source == destination)
            source = Math.floor(Math.random() * vertexCount);
        
        const data = {
            edges: edges,
            nodes: vertices
        };

        return data;
    }

    getProblemButton.onclick = function () {
        
        currentData = createGraphData();
        problemNetwork.setData(currentData);
        problemText.innerText = 'Find least time path from ' + locationNames[source] + ' to ' + locationNames[destination];
        container2.style.display = "none";
    };

    solveProblemButton.onclick = function () {
        
        container2.style.display = "inline";

        let solvedData = solveGraphData(vertexCount);
    
        if (solvedData == null) {
            container2.style.display = "none";
            problemText.innerText = 'Sorry no path from ' + locationNames[source] + ' to ' + locationNames[destination] + ' exists';
        } else {
            solutionNetwork.setData(solvedData);
        }
    };

    function dijkstra(graph, size, source) {
        let visited = Array(size).fill(0);
        let distances = [];
        for (let i = 0; i < size; i++)
            distances.push([100000, -1]);

        distances[source][0] = 0;   

        for (let i = 0; i < size - 1; i++) {
            let minIndex = -1;
            for (let j = 0; j < size; j++) {
                if (visited[j] === 0) {
                    if (minIndex === -1 || distances[j][0] < distances[minIndex][0])
                        minIndex = j;
                }
            }

            visited[minIndex] = 1;
            for (let j in graph[minIndex]) {
                let edge = graph[minIndex][j];
                if (visited[edge[0]] === 0 && distances[edge[0]][0] > distances[minIndex][0] + edge[1]) {
                    distances[edge[0]][0] = distances[minIndex][0] + edge[1];
                    distances[edge[0]][1] = minIndex;
                }
            }
        }
        return distances;
    }

    function solveGraphData(vertexCount) {

        let data = currentData;
        var graph = [];

        for (let i = 0; i <= vertexCount; i++) {
            graph.push([]);
        }
        
        console.log(data)

        for (let i = 0; i < data['edges'].length; i++) {
            let edge = data['edges'][i];
            graph[edge['to']].push([edge['from'], parseInt(edge['label'])]);
            graph[edge['from']].push([edge['to'], parseInt(edge['label'])]);
        }

        let distances = dijkstra(graph, vertexCount, source);

        if (distances[vertexCount - 1][1] == -1) 
        {
            return null;
        }

        let newEdges = [];
        newEdges = createEdges(distances, destination);
        data = {
            nodes: data['nodes'],
            edges: newEdges
        };

        return data;
    }

    function createEdges(distances, current) {
        let newEdges = [];
        while (distances[current][0] != 0) {
            let from = distances[current][1];
            newEdges.push({
                from: from,
                to: current,
                color: 'green',
                label: String(distances[current][0] - distances[from][0])
            });
            current = from;
        }
        return newEdges;
    }

    getProblemButton.click();
}
