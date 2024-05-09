import React from 'react';
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass-thumbnail.png"
                alt="logo"/>
        </header>
    );
};