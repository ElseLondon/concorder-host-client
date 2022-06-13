import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import CopyText from '../components/CopyText';
import PillButton from '../components/PillButton';


export default function NowPlaying() {
  const headerText = "No Tracks on The Queue";
  const copyText = [
    "It seems like the play queue is empty at the moment. As soon as any",
    "users connect, or you add songs to the Jukebox catalogue, tracks",
    "will show up here.",
  ];
  const buttonText = "Manage Jukebox";

  return (
    <ContainerDiv>
      <Header headerText={headerText}></Header>

      <CopyText copyText={copyText}></CopyText>
    
      <PillButton buttonText={buttonText}></PillButton>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  background-color: #000000; 
  height: 20vh; 
  width: 100vh; 
  margin: 25px;
  border-radius: 10px;
  padding: 37vh 28vh 37vh 28vh;
`;
