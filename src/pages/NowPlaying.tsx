import React from 'react';
import styled from 'styled-components';
import PillButton from '../components/PillButton';


function NowPlaying() {
  return (
    <ContainerDiv>
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
      <PillButton buttonText="Manage Jukebox"></PillButton>
    </ContainerDiv>
  );
}

export default NowPlaying;

const ContainerDiv = styled.div`
  background-color: #000000; 
  height: 20vh; 
  width: 100vh; 
  margin: 25px;
  border-radius: 10px;
  padding: 37vh 28vh 37vh 28vh;
`;
