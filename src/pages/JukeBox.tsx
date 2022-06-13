import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import CopyText from '../components/CopyText';
import PillButton from '../components/PillButton';


export default function JukeBox() {
  const headerText = "Jukebox is empty...";
  const copyText = [
    "You haven't added any tracks to the Jukebox catalogue yet. Add",
    "some tracks below so that users can select tracks from the Jukebox.",
  ];
  const buttonText = "Add to Catalogue";

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
