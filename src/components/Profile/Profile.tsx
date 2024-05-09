import React from 'react';
import s from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    );
};