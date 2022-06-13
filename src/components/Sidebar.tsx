import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import SidebarItems from "./SidebarItems";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarGreeting from "./SidebarGreeting";


interface SidebarProps {
  history: {
    location: {
      pathname: string
    },
    defaultActive: string | number
  }
}

export default function Sidebar(props: SidebarProps) {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || props.history.defaultActive);

  useEffect(()=> {
    const activeItem = SidebarItems.findIndex(item => getPath(item.route) === getPath(location.pathname))
    changeActiveIndex(activeItem);
  }, [location])

  function changeActiveIndex(newIndex: string | number) {
    localStorage.setItem("lastActiveIndex", newIndex.toString());
    setActiveIndex(newIndex);
  }

  function getPath(path: string) {
    if (path.charAt(0) !== "/") return "/" + path;
    return path;
  }

  function generateSidebarItems(sidebarIndexArray: number[], activeIndex: string | number) {
    return (
      SidebarItems.map((item, index)=> {
        if (sidebarIndexArray.includes(index)) {
          return (
            <SidebarItem
              index={index}
              activeIndex={activeIndex}
              item={item}
            />
          );
        }
      })
    );
  };

  return (
    <>
      <SidebarParent>
        <AllSidebarItems>
          <SidebarLogo />

          {
            generateSidebarItems([0,1,2,3], activeIndex)
          }

          <LowerSidebarItems>
            <SidebarGreeting />
            {
              generateSidebarItems([4,5], activeIndex)
            }
          </LowerSidebarItems>

        </AllSidebarItems>
        <div className="behind-the-scenes"/>
      </SidebarParent>
    </>
  );
}

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

const AllSidebarItems = styled.div`
  position: fixed;
`;

const LowerSidebarItems = styled.div`
  position: absolute;
  bottom: 75px;
  width: 100%;
`;