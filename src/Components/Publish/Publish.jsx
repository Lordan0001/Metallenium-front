import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Publish.module.css";
import Footer from "../Footer/Footer";

import AddBand from "./Add/AddBand";
import AddAlbum from "./Add/AddAlbum";
import AddSong from "./Add/AddSong";
import UpdateBand from "./Update/UpdateBand";
import UpdateAlbum from "./Update/UpdateAlbum";
import UpdateSong from "./Update/UpdateSong";
import DeleteSong from "./Delete/DeleteSong";
import DeleteAlbum from "./Delete/DeleteAlbum";
import DeleteBand from "./Delete/DeleteBand";

const Publish = () => {
    const [currentMode, setCurrentMode] = useState("Add");

    const modes = [
        {
            label: "Add",
            components: [<AddBand />, <AddAlbum />, <AddSong />]
        },
        {
            label: "Update",
            components: [<UpdateBand />, <UpdateAlbum />, <UpdateSong />]
        },
        {
            label: "Delete",
            components: [<DeleteBand />, <DeleteAlbum />, <DeleteSong />]
        }
    ];

    const handleModeChange = (newMode) => {
        setCurrentMode(newMode);
    };

    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <div>
                    {modes.map((mode, index) => (
                        <button
                            key={index}
                            onClick={() => handleModeChange(mode.label)}
                            className={styles.button23}
                        >
                            {mode.label}
                        </button>
                    ))}
                </div>

                <div className={styles.container}>
                    {modes.find((mode) => mode.label === currentMode).components.map((component, index) => (
                        <div key={index} className={styles.formContainer}>
                            {component}
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Publish;
