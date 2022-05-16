import /* React, */ { useEffect, useState, FormEvent } from 'react';
import './App.css';
import axios from 'axios';


const spotifyLoginUrl = `${process.env.REACT_APP_AUTH_ENDPOINT}` + 
    `?client_id=${process.env.REACT_APP_CLIENT_ID}` +
    `&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}` +
    `&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;

function App() {  
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let localStorageToken = window.localStorage.getItem("token");

    if (!localStorageToken && hash) {
      localStorageToken = hash.substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        ?.split("=")[1]!;

      window.location.hash = "";
      window.localStorage.setItem("token", localStorageToken);
    }

    setToken(localStorageToken || "");
  }, [])

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e: FormEvent) => {
    e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    });
    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist:any) => ( // fix any
      <div key={artist.id}>
        {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
        {artist.name}
      </div>
    ))
  };

  return (
    <div className="App">
      <header className="App-header">

        {!token
          ? <a href={spotifyLoginUrl}>Login to Spotify</a>
          : <button onClick={logout}>Logout</button>
        }

        {token 
          ? <form onSubmit={searchArtists}>
              <input type="text" onChange={e => setSearchKey(e.target.value)}/>
              <button type={"submit"}>Search</button>
            </form>
          : <h2>Please login</h2>
        }

        {renderArtists()}
        
      </header>
    </div>
  );
}

export default App;
