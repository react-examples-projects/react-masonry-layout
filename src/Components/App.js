import React, { useEffect } from "react";
import Container from "./Elements";

function App() {
  const [posts, setPosts] = React.useState([]);
  const breakpoints = {
    sm: 2,
    md: 4,
    lg: 5,
    xl: 5,
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="App">
      <Container >
        {posts.map((post) => (
          <Container.Column key={post.id}>
            <h5 className="title">
              <h2>{post.id}</h2>
              {post.title}
            </h5>
            <p>{post.body}</p>
          </Container.Column>
        ))}
      </Container>
    </div>
  );
}

export default App;
