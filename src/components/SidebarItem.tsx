import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


interface SidebarItemProps {
  index: number;
  activeIndex: string | number;
  item: {
    route: string;
    name: string;
  }
}

export default function SidebarItem(props: SidebarItemProps) {
  const {item, index, activeIndex} = props;

  return(
    <Link to={item.route}>
      <StyledSidebarItem key={item.name} active={index === activeIndex}>
        <p>{item.name}</p>
        
        { 
          index === activeIndex &&
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
