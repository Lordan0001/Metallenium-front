import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
             <Link   className={styles.logo} to='/'>Metallenium</Link>

                <ul className={styles.menu}>
                    <li><Link className={styles.linkHeader} to="/">Home</Link></li>
                    <li><Link className={styles.linkHeader} to='/albums'>Albums</Link></li>
                    <li><Link className={styles.linkHeader} to='/publish'>Publish</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;