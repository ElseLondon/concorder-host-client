import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// @ts-ignore
function Sidebar(props, {defaultActive,}) {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  // @ts-ignore
  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path: string) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(()=> {
    const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
    changeActiveIndex(activeItem);
  }, [location])

  return (
    <>
        <SidebarParent>
          
        <div style={{position: 'fixed'}}>

          {/* CHANGE FOR LOGO */}
          <LogoPlaceholder
            // @ts-ignore
            active={false}
          >
            <p>CONCORDER</p>
          </LogoPlaceholder>
          {/* CHANGE FOR LOGO */}

          <div>
            {
              SidebarItems.map((item, index)=> {
                if ([0,1,2,3].includes(index)) {
                  return (
                    <Link to={item.route}>
                      <UpperSidebarItem key={item.name}
                        // @ts-ignore
                        active={index === activeIndex}
                      >
                        <p>{item.name}</p>
                        { 
                          index === activeIndex &&
                          <ChevronRightIcon style={{ color: 'white', marginLeft: 'auto', height: '19px' }}/>
                        }
                      </UpperSidebarItem>
                    </Link>
                  );
                }
              })    
            }
          </div>

          {/* <div>
            <p style={{ color: 'white' }}>Hi, aovelhanegra!</p>
          </div> */}

          <div style={{ position: 'absolute', bottom: 75, width: '100%' }}>
            {
              SidebarItems.map((item, index)=> {
                if ([4,5].includes(index)) {
                  return (
                    <Link to={item.route}>
                      <LowerSidebarItem key={item.name}
                        // @ts-ignore
                        active={index === activeIndex}
                      >
                        <p>{item.name}</p>
                        { 
                          index === activeIndex &&
                          <ChevronRightIcon style={{ color: 'white', marginLeft: 'auto', height: '19px' }}/>
                        }
                      </LowerSidebarItem>
                    </Link>
                  );
                }
              })
            }
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

const LogoPlaceholder = styled.div`
  padding: 16px 24px;
  margin: 4px 12px;
  color: #BFBFBF;
  font-weight: bold;
`;

const UpperSidebarItem = styled.div`
  display: flex;
  padding: 18px 26px;
  transition: all 0.25s ease-in-out;
  margin: 4px 12px;
  border-radius: 4px;
  box-shadow: 0px 24px 3px -24px #BFBFBF;

  p {
    color: ${
      // @ts-ignore
      props => props.active ? "white" : "#BFBFBF"};
    font-weight: ${
      // @ts-ignore
      props => props.active ? "bold" : ""};
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
`;

const LowerSidebarItem = styled.div`
  display: flex;
  padding: 18px 26px;
  transition: all 0.25s ease-in-out;
  margin: 4px 12px;
  border-radius: 4px;
  box-shadow: 0px 24px 3px -24px #BFBFBF;

  p {
    color: ${
      // @ts-ignore
      props => props.active ? "white" : "#BFBFBF"};
    font-weight: ${
      // @ts-ignore
      props => props.active ? "bold" : ""};
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
`;
