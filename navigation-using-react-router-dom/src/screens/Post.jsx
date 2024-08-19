import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const { postId } = useParams();
  const { isLoading, error, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  console.log("postId", postId, data);

  return (
    <>
      <div>{JSON.stringify(data, undefined, 4)}</div>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </>
  );
};

export default Post;
