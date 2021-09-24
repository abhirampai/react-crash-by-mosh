import { useState, useEffect } from "react";

const FetchPostData = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPosts((prevPostState) => [...prevPostState, res]));
  }, [id]);
  return (
    <>
      <button onClick={() => setId((prevId) => prevId + 1)}>
        Click to add Posts
      </button>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchPostData;
