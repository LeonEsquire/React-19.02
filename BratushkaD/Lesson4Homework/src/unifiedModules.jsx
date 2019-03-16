// packages
import React from "react";
// modules import
import Blog from "./app/components/Blog.jsx";
import WelcomeModal from "./app/components/WelcomeModal.jsx";
// data import
import data from "./configuration.js";
const posts = data.posts;
//
const Unity = () => {
    return (<><WelcomeModal/><Blog posts={posts}/></>);
}
export default Unity;
