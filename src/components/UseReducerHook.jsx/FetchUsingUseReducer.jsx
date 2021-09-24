import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        posts: [],
        error: `Error: ${action.err}`,
      };
    default:
      return state;
  }
};

const FetchUsingUseReducer = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        dispatcher({ type: "FETCH_SUCCESS", payload: res });
      })
      .catch((err) => dispatcher({ type: "FETCH_ERROR", err: err.message }));
  }, []);
  if (state.loading) return <>Loading</>;

  if (state.error) return <>{state.error}</>;
  return (
    <>
      <ul>
        {state.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchUsingUseReducer;
