import React from "react";
import styles from './AlbumItem.module.css'
const AlbumItem = ({ album, onClick }) => {
    const handleAlbumClick = () => {
        onClick(album.albumId);
    };

    return (
        <div className={styles.albumItem} onClick={handleAlbumClick}>
            <h2>{album.albumName}</h2>
            <p>Release date: {album.releaseDate?.split('T')[0]}</p>
        </div>
    );
};

export default AlbumItem;
