import React, { useEffect } from "react";
import Container from "./Elements";
import usePagination from "../Hooks/usePagination";

function App() {
  const [postsData, setPostsData] = React.useState([]);
  const {
    data: posts,
    nextPage,
    previusPage,
    currentPage,
    pages,
  } = usePagination(postsData);
  const breakpoints = {
    sm: 1,
    md: 2,
    lg: 3,
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPostsData(json));
  }, []);

  return (
    <div className="App">
      <h5>
        Paginas: {currentPage}/{pages}
      </h5>
      <button onClick={nextPage}>Siguiente</button>
      <button onClick={previusPage}>Anterior</button>

      <Container breakpoints={breakpoints}>
        {posts.map((post) => (
          <Container.Column key={post.id}>
            <div className="post">
              <img
                src={`https://picsum.photos/id/${post.id}/350/350`}
                alt={post.title}
                className="image"
              />
              <h4 className="title">
                {/* <b>{post.id}</b> */}
                {post.title}
              </h4>
              <p className="body">{post.body}</p>
            </div>
          </Container.Column>
        ))}
      </Container>
    </div>
  );
}

export default App;
