import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";

function App() {
    const navigate = useNavigate()

    return (
        <div className="app">
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about" end>About</NavLink>

                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('about')}>About</button>
            </div>

            <Outlet></Outlet>
        </div>
    );
}

export default App;
