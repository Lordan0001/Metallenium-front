import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import styles from "./Manage.module.css";
import Footer from "../../Components/Footer/Footer";

import AddBand from "../../Components/ManageItem/Add/AddBand";
import AddAlbum from "../../Components/ManageItem/Add/AddAlbum";
import AddSong from "../../Components/ManageItem/Add/AddSong";
import UpdateBand from "../../Components/ManageItem/Update/UpdateBand";
import UpdateAlbum from "../../Components/ManageItem/Update/UpdateAlbum";
import UpdateSong from "../../Components/ManageItem/Update/UpdateSong";
import DeleteSong from "../../Components/ManageItem/Delete/DeleteSong";
import DeleteAlbum from "../../Components/ManageItem/Delete/DeleteAlbum";
import DeleteBand from "../../Components/ManageItem/Delete/DeleteBand";

const Manage = () => {
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
        // Сохраняем текущий режим в локальное хранилище
        localStorage.setItem("currentMode", newMode);
    };

    useEffect(() => {
        // Восстанавливаем текущий режим из локального хранилища при загрузке компонента
        const savedMode = localStorage.getItem("currentMode");
        if (savedMode && modes.some((mode) => mode.label === savedMode)) {
            setCurrentMode(savedMode);
        }
    }, []);

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

export default Manage;
