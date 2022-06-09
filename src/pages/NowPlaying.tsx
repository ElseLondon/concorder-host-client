import React from 'react';


function NowPlaying() {
  return (
    // create button
    <div style={{
        backgroundColor: '#000000', 
        height: '27%', 
        width: '258%', 
        margin: '25px',
        borderRadius: '10px',
        padding: '340px 0',
      }}
    >
      <h2 style={{color: 'white', textAlign: 'center'}}>No Tracks on The Queue</h2>
      <p style={{color: 'white', textAlign: 'center'}}>
        It seems like the play queue is empty at the moment. As soon as any 
      </p>
      <br/>
      <p style={{color: 'white', textAlign: 'center'}}>
        users connect, or you add songs to the Jukebox catalogue, tracks
      </p>
      <br/>
      <p style={{color: 'white', textAlign: 'center'}}>
        will show up here.
      </p>
      <br/>
      <button 
        style={{
          margin: '0 auto', 
          display: 'block',
          backgroundColor: '#ddd',
          border: 'none',
          color: 'black',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          borderRadius: '16px',
        }} 
        type="button"
        >
          Manage Jukebox
        </button>
    </div>
  );
}

export default NowPlaying;
