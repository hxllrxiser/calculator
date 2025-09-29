import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";

function App() {
    const navigate = useNavigate()

    return (
        <div className="app">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>

                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('about')}>About</button>
            </div>

            <Outlet></Outlet>
        </div>
    );
}

export default App;
