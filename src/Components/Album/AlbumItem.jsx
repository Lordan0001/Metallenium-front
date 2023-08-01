import React from "react";

const AlbumItem = ({ album }) => {

    return (
        <div className="band-item">
            {/*<img*/}
            {/*    src={`/images/${album.bandName}.webp`}*/}
            {/*    alt={album.bandName}*/}
            {/*    className="band-image"*/}
            {/*/>*/}
            <h2 className="band-name">{album.albumName}</h2>
            <p className="band-description">{album.releaseDate}</p>

        </div>
    );
};

export default AlbumItem;
