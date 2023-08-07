import React from "react";
import { Link } from "react-router-dom";
import "../Home/MainStyle.css";

const BandItem = ({ band }) => {
    return (
        <Link to={`/albums/${band.bandId}`} className="band-link">
            <div className="band-item">
                <img
                    src={`https://localhost:7041/${band.imageUrl}`}
                    alt={band.bandName}
                    className="band-image"
                />
                <h2 className="band-name">{band.bandName}</h2>
                <p className="band-description">{band.bandDescription}</p>
                <p className="band-type">{band.bandType}</p>
            </div>
        </Link>
    );
};

export default BandItem;
