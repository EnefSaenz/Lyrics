import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import Song from "./components/Song";
import Biography from "./components/Biography";

function App() {
  // States
  const [searchLyrics, setSearchLyrics] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [infoArtist, setInfoArtist] = useState({});

  useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) return;

    const { artist, song } = searchLyrics;

    const callAPI = async () => {
      const url_lyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [resultLyrics, resultInfo] = await Promise.all([
        axios(url_lyrics),
        axios(url_info),
      ]);

      setLyrics(resultLyrics.data.lyrics);
      setInfoArtist(resultInfo.data.artists[0]);
    };

    callAPI();
  }, [searchLyrics]);

  return (
    <Fragment>
      <Form setSearchLyrics={setSearchLyrics} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Biography infoArtist={infoArtist} />
          </div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
