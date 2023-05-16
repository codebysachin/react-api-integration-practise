import React from "react";

const Post = ({ post }) => {
  return (
    <li style={{ color: "blue", textAlign: "left" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
};

export default Post;
