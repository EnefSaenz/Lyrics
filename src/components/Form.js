import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setSearchLyrics }) => {
  // States
  const [search, setSearch] = useState({ artist: "", song: "" });
  const [error, setError] = useState(false);

  const { artist, song } = search;

  // To read each input
  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit
  const searchInfo = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song === "") {
      setError(true);
      return;
    }

    setError(false);
    setSearchLyrics(search);
  };

  return (
    <div className="bg-dark bg-gradient">
      {error ? <Error message="Todos los campos son obligatorios" /> : null}

      <div className="container">
        <div className="row">
          <form
            onSubmit={searchInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="start-50 translate-middle text-center">
                Busca la letra de tus canciones favoritas!
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre del artista"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre de la canción"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary float-end mt-3 fs-5 text-white"
                value="Buscar"
              >
                <i className="fas fa-search"></i> Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setSearchLyrics: PropTypes.func.isRequired,
};

export default Form;
