import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {isAuthorizedState, userState} from "../../Recoil/Atoms";
import { useCookies } from 'react-cookie';
import { tokenState } from "../../Recoil/Atoms";

const Header = () => {
    const isAuthorized = useRecoilValue(isAuthorizedState);
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const user = useRecoilValue(userState);

    const handleLogout = () => {

        removeCookie('jwt');
        window.location.reload();

    };


    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.logo} to='/'>Metallenium</Link>

                <ul className={styles.menu}>
                    <li><Link className={styles.linkHeader} to="/">Home</Link></li>
                    <li><Link className={styles.linkHeader} to="/manage">Manage</Link></li>
                    {isAuthorized ? (
                       <></>
                    ) : (
                        <>
                            <li><Link className={styles.linkHeader} to="/register">Sign up</Link></li>
                            <li><Link className={styles.linkHeader} to="/login">Sign in</Link></li>
                        </>
                    )}
                    {isAuthorized && (
                        <>
                        <li className={styles.userInfo}> {user.userName}</li>
                            <li><button className={styles.logoutButton} onClick={handleLogout}>Logout</button></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
