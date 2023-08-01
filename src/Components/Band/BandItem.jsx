import React from "react";
import "./styles.css";

const BandItem = ({ band }) => {
    return (
        <div className="band-item">
            <img
                src={`/images/${band.bandName}.webp`}
                alt={band.bandName}
                className="band-image"
            />
            <h2 className="band-name">{band.bandName}</h2>
            <p className="band-description">{band.bandDescription}</p>
            <p className="band-type">{band.bandType}</p>
        </div>
    );
};

export default BandItem;
