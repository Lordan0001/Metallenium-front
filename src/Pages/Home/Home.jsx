import React, {useEffect, useState} from "react";
import Footer from "../../Components/Footer/Footer";
import BandItem from "../../Components/BandItem/BandItem";
import Header from "../../Components/Header/Header";
import {BandService} from "../../Service/BandService";
import styles from './Home.module.css'

const Home = () => {
    const [bands, setBands] = useState([]);
    const [loading, setLoading] = useState(true); // Добавили состояние для отслеживания загрузки данных

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await BandService.getAllBands();
                setBands(data);
            } catch (error) {
                console.error("Error fetching bands:", error);
            } finally {
                setLoading(false); // Устанавливаем загрузку в false, независимо от результата
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={`${styles.bandsContainer} ${!loading ? styles.loaded : ""}`}>
                {bands.length ? (
                    bands.map((band) => <BandItem key={band.bandId} band={band} />)
                ) : (
                    <div>No bands</div>
                )}
            </div>
            <Footer className={`${styles.footer}`} />
        </div>
    );
};
export default Home;