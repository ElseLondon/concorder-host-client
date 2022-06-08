import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SidebarLogo from "./SidebarLogo";
import SidebarGreeting from "./SidebarGreeting";


// @ts-ignore
function Sidebar(props, {defaultActive,}) {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  useEffect(()=> {
    const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
    changeActiveIndex(activeItem);
  }, [location])

  function changeActiveIndex(newIndex: string | number) {
    localStorage.setItem("lastActiveIndex", newIndex.toString());
    setActiveIndex(newIndex);
  }

  function getPath(path: string) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  function generateSidebarItems(sidebarIndexArray: number[], activeIndex: string | number) {
    return (
      SidebarItems.map((item, index)=> {
        if (sidebarIndexArray.includes(index)) {
          return (
            <Link to={item.route}>
              <SidebarItem key={item.name} active={index === activeIndex}>
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
              </SidebarItem>
            </Link>
          );
        }
      })
    );
  };

  return (
    <>
      <SidebarParent>
        <div style={{position: 'fixed'}}>

          <SidebarLogo />

          <div>
            {generateSidebarItems([0,1,2,3], activeIndex)}
          </div>

          <div style={{ position: 'absolute', bottom: 75, width: '100%' }}>
            <SidebarGreeting />
            {generateSidebarItems([4,5], activeIndex)}
          </div>

        </div>
        
        <div className="behind-the-scenes"/>
      </SidebarParent>
    </>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #000000;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
  }
`;

const SidebarItem = styled.div<{active: boolean}>`
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
