import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("fetchPosts called");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPosts = postDate => dispatch => {
  console.log("fetchPosts called");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postDate)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POSTS,
        payload: post
      })
    );
};
