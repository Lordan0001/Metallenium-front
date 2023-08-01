import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const BandItem = ({ band }) => {
    return (
        <Link to={`/albums/${band.bandId}`} className="band-link"> {/* Change the URL to include the bandId */}
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
        </Link>
    );
};

export default BandItem;