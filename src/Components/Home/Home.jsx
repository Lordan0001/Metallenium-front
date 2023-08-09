import React, { useEffect, useState } from "react";
import { BandService } from "../../Service/BandService";
import BandItem from "../Band/BandItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Home.module.css'


const Home = () => {
    const [bands, setBands] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await BandService.getAllBands();
            setBands(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.bandsContainer}>
                {bands.length ? (
                    bands.map((band) => <BandItem key={band.bandId} band={band} />)
                ) : (
                    <div>no bands</div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
