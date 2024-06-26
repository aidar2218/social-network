import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = ({message, likesCount}: PostPropsType) => {


    return (
        <div className={s.item}>
            <img src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:9ca6d0d8-a621-4614-ad00-ccebe3084a62?quality=0.7&gen=ntrn&legacyStatusCode=true" alt="avatar"/>
            {message}
            <div>like {likesCount}</div>
        </div>
    );
};