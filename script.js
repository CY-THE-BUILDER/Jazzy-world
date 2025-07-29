const nodes = new vis.DataSet([
  {
    "id": "King Oliver",
    "label": "King Oliver",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/2XgHHQFZGc5vN5YbBqzC3l"
  },
  {
    "id": "Louis Armstrong",
    "label": "Louis Armstrong",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/56oDRnqbIiwx4mymNEv7dS"
  },
  {
    "id": "Charlie Parker",
    "label": "Charlie Parker",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/1Uur1cYuaT5dWzgLk8g1eW"
  },
  {
    "id": "Miles Davis",
    "label": "Miles Davis",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/0kbYTNQb4Pb1rPbbaF0pT4"
  },
  {
    "id": "John Coltrane",
    "label": "John Coltrane",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/2hGh5VOeeqimQFxqXvfCUf"
  },
  {
    "id": "Thelonious Monk",
    "label": "Thelonious Monk",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/5rZUE6fJ6by7C7Z3rTtYBz"
  },
  {
    "id": "Duke Ellington",
    "label": "Duke Ellington",
    "type": "artist",
    "spotify": "https://open.spotify.com/embed/artist/4F7Q5NV6h5TSwCainz8S5A"
  },
  {
    "id": "Bebop",
    "label": "Bebop",
    "type": "genre"
  },
  {
    "id": "Cool",
    "label": "Cool",
    "type": "genre"
  },
  {
    "id": "Nouvelle Orl\u00e9ans",
    "label": "Nouvelle Orl\u00e9ans",
    "type": "genre"
  }
]);
const edges = new vis.DataSet([
  {
    "from": "King Oliver",
    "to": "Louis Armstrong"
  },
  {
    "from": "Louis Armstrong",
    "to": "Nouvelle Orl\u00e9ans"
  },
  {
    "from": "Duke Ellington",
    "to": "Bebop"
  },
  {
    "from": "Charlie Parker",
    "to": "Bebop"
  },
  {
    "from": "Thelonious Monk",
    "to": "Bebop"
  },
  {
    "from": "Miles Davis",
    "to": "Cool"
  },
  {
    "from": "Cool",
    "to": "John Coltrane"
  },
  {
    "from": "Louis Armstrong",
    "to": "Miles Davis"
  },
  {
    "from": "Charlie Parker",
    "to": "Miles Davis"
  },
  {
    "from": "Thelonious Monk",
    "to": "John Coltrane"
  },
  {
    "from": "Miles Davis",
    "to": "John Coltrane"
  }
]);

const container = document.getElementById("network");
const data = { nodes: nodes, edges: edges };
const options = {
  nodes: {
    shape: "dot",
    size: 15,
    font: { color: "#fff" },
    color: {
      background: "#29a",
      border: "#0cf",
      highlight: { background: "#f90", border: "#fff" }
    }
  },
  edges: {
    color: "#aaa",
    arrows: { to: { enabled: true, scaleFactor: 0.5 } }
  },
  physics: { stabilization: false }
};
const network = new vis.Network(container, data, options);

network.on("click", function (params) {
  if (params.nodes.length > 0) {
    const clickedNode = nodes.get(params.nodes[0]);
    if (clickedNode.spotify) {
      document.getElementById("spotifyPlayer").src = clickedNode.spotify;
    }
  }
});
