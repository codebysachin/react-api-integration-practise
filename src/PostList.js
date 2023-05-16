import { React, useEffect, useState } from "react";
import Post from "./Post";

const PostList = () => {
  // URL for fetching posts, this can be read from config file
  const API_BASE_URL = "https://jsonplaceholder.typicode.com";

  // local states of component
  const [posts, setPosts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const getURL = `${API_BASE_URL}/posts`;

  const getOptions = {
    method: "GET",
    header: {
      "Content-Type": "application/json"
    }
  };

  const fetchAPI = async () => {
    try {
      const response = await fetch(getURL, getOptions);
      if (!response.ok) throw Error("Unable to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {!fetchError && (
        <ul>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
