import { useEffect, useState } from 'react';
import './App.css';


const spotifyLoginUrl = `${process.env.REACT_APP_AUTH_ENDPOINT}` + 
    `?client_id=${process.env.REACT_APP_CLIENT_ID}` +
    `&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}` +
    `&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;

function App() {  
  const [token, setToken] = useState("");

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

  return (
    <div className="App">
      <header className="App-header">
        {!token
          ? <a href={spotifyLoginUrl}>Login to Spotify</a>
          : <button onClick={logout}>Logout</button>
        }
      </header>
    </div>
  );
}

export default App;
