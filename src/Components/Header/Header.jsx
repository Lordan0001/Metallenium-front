import React from "react";
import "./Header.css"; // Подключаем файл стилей
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
             <Link   className="logo" to='/'>Metallenium</Link>

                <ul className="menu">
                    <li><Link className={"linkHeader"} to="/">Home</Link></li>
                    <li><Link className={"linkHeader"} to='/albums'>Albums</Link></li>
                    <li><Link className={"linkHeader"} to='/publish'>Publish</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;