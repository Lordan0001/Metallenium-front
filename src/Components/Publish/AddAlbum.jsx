import React, { useState, useEffect } from "react";
import { AlbumService } from "../../Service/AlbumService";
import { BandService } from "../../Service/BandService";
import styles from "./Publish.module.css";

const AddAlbum = () => {
    const [albumData, setAlbumData] = useState({
        albumName: "",
        bandId: "",
        releaseDate: "",
    });

    const [bands, setBands] = useState([]);

    useEffect(() => {
        // Fetch bands data and store them in the state
        const fetchBands = async () => {
            try {
                const data = await BandService.getAllBands();
                setBands(data);
            } catch (error) {
                console.error("Error fetching bands:", error);
            }
        };

        fetchBands();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAlbumData({
            ...albumData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newAlbum = await AlbumService.addAlbum(albumData);
            console.log("New album added:", newAlbum);
            setAlbumData({
                albumName: "",
                bandId: "",
                releaseDate: "",
            });
        } catch (error) {
            console.error("Error adding album:", error);
        }
    };

    return (
       <div>
           <p>Album</p>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="albumName"
                placeholder="Album Name"
                value={albumData.albumName}
                onChange={handleInputChange}
            />
            <input
                type="date"
                name="releaseDate"
                placeholder="Release Date"
                value={albumData.releaseDate}
                onChange={handleInputChange}
            />
            <select name="bandId" value={albumData.bandId} onChange={handleInputChange}>
                <option value="">Select a Band</option>
                {bands.map((band) => (
                    <option key={band.bandId} value={band.bandId}>
                        {band.bandName}
                    </option>
                ))}
            </select>
            <button type="submit">Send</button>
        </form>
       </div>
    );
};

export default AddAlbum;
