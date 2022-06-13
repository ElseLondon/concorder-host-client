import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


export default function SidebarItem(props: any) { // fix any
  return(
    <Link to={props.item.route}>
      <StyledSidebarItem key={props.item.name} active={props.index === props.activeIndex}>
        <p>{props.item.name}</p>
        
        { 
          props.index === props.activeIndex &&
            <ChevronRightIcon
              style={{ 
                color: 'white', 
                marginLeft: 'auto', 
                height: '19px'
              }}
            />
        }
      </StyledSidebarItem>
    </Link>
  );
};

const StyledSidebarItem = styled.div<{active: boolean}>`
  display: flex;
  padding: 18px 26px;
  transition: all 0.25s ease-in-out;
  margin: 4px 12px;
  border-radius: 4px;
  box-shadow: 0px 24px 3px -24px #BFBFBF;

  p {
    color: ${props => props.active ? "white" : "#BFBFBF"};
    font-weight: ${props => props.active ? "bold" : ""};
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
`;
