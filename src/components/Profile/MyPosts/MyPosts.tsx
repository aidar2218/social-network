import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.mainBox}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you??"} likesCount={18} />
                <Post message={"It's my first post"} likesCount={22} />
            </div>
        </div>
    );
};