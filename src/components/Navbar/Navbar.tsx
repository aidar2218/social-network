import React from 'react';
import s from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>Profile</div>
            <div className={s.item}>Messages</div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Settings</div>
        </nav>
    );
};