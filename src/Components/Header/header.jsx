import React from "react";
import "./Header.css"; // Подключаем файл стилей
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
             <Link   className="logo" to='/'>Metallenium</Link>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/bands">Bands</a></li>
                    <li><a href="/albums">Albums</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;