import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumItem from "../../Components/AlbumItem/AlbumItem";
import Header from "../../Components/Header/Header";
import SongItem from "../../Components/Song/SongItem";
import BandItem from "../../Components/BandItem/BandItem";
import {AlbumService} from "../../Service/AlbumService";
import {SongService} from "../../Service/SongService";
import {BandService} from "../../Service/BandService";
import styles from "./Album.module.css";
import Footer from "../../Components/Footer/Footer";
import {useRecoilState} from "recoil";
import {albumsState, bandsState, songsState} from "../../Recoil/Atoms";

const Album = () => {
    const [albums, setAlbums] = useRecoilState(albumsState)
    const [songs, setSongs] = useRecoilState(songsState)
    const [bands,setBands] = useRecoilState(bandsState)

    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setSongs([]);
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
            finally {
                setLoading(false);
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
        <div className={styles.pageContainer}>
            <Header />
            <div className={`${styles.bandsContainerAlbum} ${!loading ? styles.loaded : ""}`}>
                {bands.length ? (
                    bands.map((band) => <BandItem key={band.bandId} band={band} />)
                ) : (
                    <div>no bands</div>
                )}
            </div>
            <div className={`${styles.albumsContainer} ${!loading ? styles.loaded : ""}`}>
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
            <div className={`${styles.songsContainer} ${!loading ? styles.loaded : ""}`}>
                {songs.length ? (
                    songs.map((song) => <SongItem key={song.songId} song={song} />)
                ) : (
                    <div></div>
                )}
            </div>
            <Footer className={`${styles.footer}`} />


        </div>
    );
};

export default Album;
