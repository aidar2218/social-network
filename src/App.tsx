import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass-thumbnail.png" alt="logo"/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className="content">
                <img src="https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg" alt=""/>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
