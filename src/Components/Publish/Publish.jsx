import React from "react";
import Header from "../Header/Header";
import AddBand from "./AddBand";
import AddAlbum from "./AddAlbum";
import AddSong from "./AddSong";
import styles from "./Publish.module.css"; // Import the CSS module

const Publish = () => {
    return (
        <div>
            <Header />
        <div className={styles["main-container"]}>

            <div className={styles.container}>
                <div className={styles["form-container"]}>
                    <AddBand />
                </div>
                <div className={styles["form-container"]}>
                    <AddAlbum />
                </div>
                <div className={styles["form-container"]}>
                    <AddSong />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Publish;
