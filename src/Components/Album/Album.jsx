import React, { useEffect, useState } from "react";
import { Service } from "../../Service/Service";
import AlbumItem from "./AlbumItem";
import Header from "../Header/header";


const Album = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Service.getAllAlbums();
            setAlbums(data);

        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <h1>Band list</h1>
            <div >
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
