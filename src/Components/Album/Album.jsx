import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumItem from "./AlbumItem";
import Header from "../Header/Header";
import SongItem from "../Song/SongItem";
import {AlbumService} from "../../Service/AlbumService";
import {SongService} from "../../Service/SongService";
import BandItem from "../Band/BandItem";
import {BandService} from "../../Service/BandService";

const Album = () => {
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [bands,setBands] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    const data = await AlbumService.getAllAlbums();
                    setAlbums(data);
                    setBands([]);
                } else {

                    const albumData = await AlbumService.getAlbumsByBand(id);
                    setAlbums(albumData);


                    const bandData = await BandService.getOneBand(id);
                    setBands([bandData]);
                }
            } catch (error) {
                console.error("Error fetching albums:", error);
                setAlbums([]);
                setBands([]);
            }
        };
        fetchData();
    }, [id]);

    const LoadSongs = async (albumId) => {
        try {
            const Songdata = await SongService.getSongsByAlbums(albumId);
            setSongs(Songdata);
        } catch (error) {
            console.error("Error fetching songs:", error);
            setSongs([]);
        }
    };

    const handleAlbumItemClick = async (albumId) => {
        await LoadSongs(albumId);
    };

    return (
        <div>
            <Header />
            <div className="bands-container-album">
                {bands.length ? (
                    bands.map((band) => <BandItem key={band.bandId} band={band} />)
                ) : (
                    <div>no bands</div>
                )}
            </div>
            <div className="albums-container" >
                {albums.length ? (
                    albums.map((album) => (
                        <AlbumItem
                            key={album.albumId}
                            album={album}
                            onClick={handleAlbumItemClick} // Передайте обработчик в AlbumItem
                        />
                    ))
                ) : (
                    <div>no albums</div>
                )}
            </div>
            <div className="songs-container">
                {songs.length ? (
                    songs.map((song) => <SongItem key={song.songId} song={song} />)
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Album;
