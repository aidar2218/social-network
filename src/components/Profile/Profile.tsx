import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};