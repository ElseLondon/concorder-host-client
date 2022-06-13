import React from 'react';
import styled from 'styled-components';
import PillButton from '../components/PillButton';


function NowPlaying() {
  return (
    <ContainerDiv>
      <Header>No Tracks on The Queue</Header>
      <CopyRow>
        It seems like the play queue is empty at the moment. As soon as any 
      </CopyRow>
      <br/>
      <CopyRow>
        users connect, or you add songs to the Jukebox catalogue, tracks
      </CopyRow>
      <br/>
      <CopyRow>
        will show up here.
      </CopyRow>
      <br/>
      <PillButton buttonText="Manage Jukebox"></PillButton>
    </ContainerDiv>
  );
}

export default NowPlaying;

const Header = styled.h2`
  color: white;
  text-align: center;
`;

const CopyRow = styled.p`
  color: white;
  text-align: center;
`;

const ContainerDiv = styled.div`
  background-color: #000000; 
  height: 20vh; 
  width: 100vh; 
  margin: 25px;
  border-radius: 10px;
  padding: 37vh 28vh 37vh 28vh;
`;
