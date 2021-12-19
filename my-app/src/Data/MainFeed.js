import React from "react";
import Users from "./LocalStorage";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Like from "./Like";
import Dislike from "./Dislike";
import Karen from "./Images/3280.jpg";

export default function MainFeed() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
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
      <div class="postBody">
        <ul id="posts">
          <h3 id="postTitle">Feed</h3>
          <li class="post">
            <div class="postLeft">
              <img src={Karen} class="ProfilePic" />
              <h3>Karen McMuffin</h3>
            </div>
            <p>Google cooking recipies</p>
            <div>
              <Like />
              <Dislike />
            </div>
          </li>
          <li class="post">
            <div class="postLeft">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="ProfilePic"
              />
              <h3>Emily George</h3>
            </div>
            <p>Oh my lord, just seen a bald eagle! fEELING EXCITED! :D</p>
            <div>
              <Like />
              <Dislike />
            </div>
          </li>
          <li class="post">
            <div class="postLeft">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="ProfilePic"
              />
              <h3>Lucas Paul</h3>
            </div>
            <p>Hey everyone, I'd just like to say..</p>
            <div>
              <Like />
              <Dislike />
            </div>
          </li>
          <li class="post">
            <div class="postLeft">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="ProfilePic"
              />
              <h3>Jada McMuffin</h3>
            </div>
            <p>
              Can't believe my mom Karen doesn't know how to use Facetagram!!
            </p>
            <div>
              <Like />
              <Dislike />
            </div>
          </li>
          <li class="post">
            <div class="postLeft">
              <img
                src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80"
                class="ProfilePic"
              />
              <h3>Geogre Davis</h3>
            </div>
            <p>Just got a new deadlifing PB! 69 kg's!!</p>
            <div>
              <Like />
              <Dislike />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
