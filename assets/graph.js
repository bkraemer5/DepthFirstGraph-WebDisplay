function Graph(noOfVertices) {

		var noOfVertices;
		var adjList;

		this.adjList = new Map();
		this.noOfVertices = noOfVertices;
	}

	Graph.prototype.addVertex=function(v) {
			this.adjList.set(v,[]);
	}

	Graph.prototype.addEdge=function(v, w) {
		for (i = 0; i < this.noOfVertices; i++) {
			if (w[i] != v) {
				this.adjList.get(v).push(w[i]);
			}
		}
	}

	Graph.prototype.grabEdges=function(v) {
		return this.adjList.get(v);
	}

	Graph.prototype.printGraph=function() {
		var get_keys = this.adjList.keys();

		for (var i of get_keys) {
			var get_values = this.adjList.get(i);
			var adjacentNodes = "";

			for (var j of get_values) {
				adjacentNodes += j + " ";
			}

			console.log(i + " -> " + adjacentNodes);
		}
	}