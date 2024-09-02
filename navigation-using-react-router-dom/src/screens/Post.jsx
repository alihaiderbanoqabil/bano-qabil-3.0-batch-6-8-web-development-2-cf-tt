import React, { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const { postId } = useParams();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(location, "location");
  console.log(
    searchParams,
    "searchParams",
    searchParams.get("name"),
    searchParams.get("age")
  );

  const { isLoading, error, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  // console.log("postId", postId, data);

  const setQueryParams = () => {
    setSearchParams("?category=electronics&ram=16");
  };
  return (
    <>
      <h1 className="text-green-600 text-[10rem] font-bold underline">
        Hello world!
      </h1>
      <div>{JSON.stringify(data, undefined, 4)}</div>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
      <button onClick={setQueryParams}>Set Query Params</button>
    </>
  );
};

export default Post;
