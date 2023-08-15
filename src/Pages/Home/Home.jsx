import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { bandsState, loadingState } from '../../Recoil/Atoms';
import { BandService } from '../../Service/BandService';
import Footer from '../../Components/Footer/Footer';
import BandItem from '../../Components/BandItem/BandItem';
import Header from '../../Components/Header/Header';
import styles from './Home.module.css';

const Home = () => {
    const [bands, setBands] = useRecoilState(bandsState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await BandService.getAllBands();
                setBands(data);
            } catch (error) {
                console.error("Error fetching bands:", error);
            } finally {
                setLoading(false);
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
