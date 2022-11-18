import React from 'react';
import c from "../Profile.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {
    return (
        <div className={c.postsBlock}>
            My posts
            <div>
                <div><textarea ></textarea></div>
                <div> <button>add post</button></div>
            </div>
            <div className= {c.posts}>
                <Post message= 'First post' like = {3}/>
                <Post message='Second post' like= {4}/>
            </div>
        </div>
    );
};
