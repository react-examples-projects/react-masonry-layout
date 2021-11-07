import React, { useEffect } from "react";
import Container from "./Elements";

function App() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="App">
      <Container>
        {posts.map((post) => (
          <Container.Column>{post.body}</Container.Column>
        ))}
      </Container>
    </div>
  );
}

export default App;
