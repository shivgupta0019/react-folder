import { useContext, useEffect, useState } from "react";

import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessages";
import LoadingSpinnner from "./loadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  // const { postList} = useContext(PostListData);
  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingSpinnner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)} */}

      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
      // addInitialPosts(data.posts);
      // setFetching(false);
    });
};

export default PostList;
