import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import logo from'../assets/concorder-logo.png';

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

          {/* LOGO */}
          <div style={{ padding: '16px 24px', margin: '4px 12px' }}>
            <img style={{ height: '30px' }} src={logo} alt="fireSpot"/>
          </div>
          {/* LOGO */}

          {/* UPPER SIDEBAR ITEMS */}
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
          {/* UPPER SIDEBAR ITEMS */}

          {/* LOWER SIDEBAR ITEMS */}
          <div style={{ position: 'absolute', bottom: 75, width: '100%' }}>
            {/* GREETING */}
            <div>
              <p style={{ color: 'white', padding: '16px 24px', margin: '4px 12px' }}>Hi, aovelhanegra!</p>
            </div>
            {/* GREETING */}

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
          {/* LOWER SIDEBAR ITEMS */}

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
