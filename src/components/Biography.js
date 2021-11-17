import React from "react";
import PropTypes from "prop-types";

const Biography = ({ infoArtist }) => {
  if (Object.keys(infoArtist).length === 0) return null;

  const {
    strArtistThumb,
    strGenre,
    strBiographyES,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = infoArtist;

  return (
    <div className="card border-light">
      <div className="card-header bg-dark bg-gradient text-light h3">
        Información del artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo de artista" />
        <p className="card-text">
          <strong>Género: </strong>
          {strGenre}
        </p>
        <h2 className="card-text">Biografía</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

Biography.propTypes = {
  infoArtist: PropTypes.object.isRequired,
};

export default Biography;
