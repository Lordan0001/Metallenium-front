import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import {bandsState, tokenState, userState} from '../../Recoil/Atoms';
import { BandService } from '../../Service/BandService';
import Footer from '../../Components/Footer/Footer';
import BandItem from '../../Components/BandItem/BandItem';
import Header from '../../Components/Header/Header';
import styles from './Home.module.css';

import { AuthService } from '../../Service/AuthService';

const Home = () => {
    const [bands, setBands] = useRecoilState(bandsState);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useRecoilState(tokenState);
    const [user, setUser] = useRecoilState(userState);
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await BandService.getAllBands();
                setBands(data);
                if(cookies.jwt){
                setToken(cookies.jwt);
                    if (token !='') {
                        const userData = await AuthService.getMe(token);
                        setUser(userData);

                    }
                }

            } catch (error) {
                console.error('Error fetching bands:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cookies, token]);

    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={`${styles.bandsContainer} ${!loading ? styles.loaded : ''}`}>
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
