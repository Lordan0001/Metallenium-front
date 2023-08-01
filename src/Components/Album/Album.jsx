import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { Service } from "../../Service/Service";
import AlbumItem from "./AlbumItem";
import Header from "../Header/header";

const Album = () => {
    const [albums, setAlbums] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try{


            const data = await Service.getAlbumsByBand(id);
            setAlbums(data);}
            catch (error){
                console.error("Error fetching albums:", error);
                setAlbums([]);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <Header />
            <h1>Band list</h1>
            <div>
                {albums.length ? (
                    albums.map((album) => <AlbumItem key={album.albumId} album={album} />)
                ) : (
                    <div>no bands</div>
                )}
            </div>
        </div>
    );
};

export default Album;
