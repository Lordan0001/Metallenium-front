import React, { useEffect, useState } from "react";
import { BandService } from "../../Service/BandService";
import BandItem from "../Band/BandItem";
import Header from "../Header/Header";


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
            <h1>Band list</h1>
            <div className="bands-container">
                {bands.length ? (
                    bands.map((band) => <BandItem key={band.bandId} band={band} />)
                ) : (
                    <div>no bands</div>
                )}
            </div>
        </div>
    );
};

export default Home;
