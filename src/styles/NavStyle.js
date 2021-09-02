import styled from "styled-components";
//usando NavLink as por ter o mesmo nome que o do elemento que usei (NavLink)
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #650D99;
    height: 44px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    bottom: 0;
`

export const NavLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 74px;
   height: 100%;
   cursor: pointer;
   
   &.active{
       background: #FFF;
   }
   
`

export const NavMenu = styled.div`
   display: flex;
   align-items: center;

`
// export const NavButton = styled(Link)`
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    background: #EB3C7D;
//    height: 85px;
//    width: 85px;
//    border-radius: 50%  50%  0% 50%;
//    position: absolute;
//    left: 285px;
//    bottom: 0;

// `
