// Made by Wesley Squire

import React from "react";
import Users from "./LocalStorage";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

export default function Profile(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const posts = user.posts;
  const postTitle = "Heres your first ever post!";
  if (posts === [] || posts === null) {
    posts[0] = "You've never made a post!";
    postTitle = "You've never made a post!";
  } else {
    console.log(JSON.stringify(posts));
  }
  // JSON.stringify(posts);
  // const i = 0;
  // const post = [];
  // for (i; i < posts.length - 1; i++) {
  //   <li class="post">
  //     <img src={user.picture} class="ProfilePic" />
  //     <p>{post}</p>
  //   </li>;
  // }

  // console.log(post);
  return (
    <div class="Profile">
      {/* App-header made by Wesley Squire */}
      <header className="App-header">
        <h2 id="logo">
          Face<span>tagram</span>
        </h2>
        <ul>
          <li>
            <Link to="/MainFeed">
              <i class="fas fa-home" id="home"></i>
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <img src={user.picture} class="ProfilePic" />
            </Link>
          </li>
        </ul>
      </header>
      <hr />

      <div id="ProfileTop">
        <div id="ProfileTopLeft">
          <h3 id="username2">
            {user.login}
            {user.username}
          </h3>
          <img src={user.picture} class="ProfilePic" alt="profile" />
        </div>
        <div id="ProfileTopRight">
          <textarea id="bio" rows="6" cols="35" name="comment">
            {user.bio}
          </textarea>
        </div>
      </div>

      <hr />
      <Link to="/">Logout</Link>
      <div id="ProfilePosts">
        <ul id="posts">
          <h3 id="postTitle">Posts</h3>
          <li class="post">
            <img src={user.picture} class="ProfilePic" />
            <p>{posts[0]}</p>
          </li>
          <li class="post">
            <img src={user.picture} class="ProfilePic" />
            <p>{posts[1]}</p>
          </li>
          <li class="post">
            <img src={user.picture} class="ProfilePic" />
            <p>{posts[2]}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
