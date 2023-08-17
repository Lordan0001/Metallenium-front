import styles from './Login.module.css'
import Header from "../../Components/Header/Header";
import React from "react";
import SignIn from "../../Components/Sign/In/SignIn";
import Footer from "../../Components/Footer/Footer";
const Login = () =>{


    return(
        <div >
            <Header />
            <div className={styles.LoginContainer}>
                <SignIn/>
            </div>
            <Footer/>
            </div>
    )
}
export default Login;