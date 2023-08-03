import React from "react";

const AlbumItem = ({ album, onClick }) => {
    const handleAlbumClick = () => {
        onClick(album.albumId);
    };

    return (
        <div className="album-item" onClick={handleAlbumClick}>
            <h2 className="album-name">{album.albumName}</h2>
            <p className="album-description">Release date: {album.releaseDate?.split('T')[0]}</p>
        </div>
    );
};

export default AlbumItem;
