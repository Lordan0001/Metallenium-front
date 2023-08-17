import styles from './Register.module.css'
import Header from "../../Components/Header/Header";
import React from "react";
import SignUp from "../../Components/Sign/Up/SignUp";

import Footer from "../../Components/Footer/Footer";
const Register = () =>{


    return(
        <div >
            <Header />
            <div className={styles.RegisterContainer}>
                <SignUp/>
            </div>
            <Footer/>
        </div>
    )
}
export default Register;