import React from "react";

//import components
import styled,{css} from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import {FaBars} from 'react-icons/fa';
import Image from '../img/image-2.png';
import Svg from '../img/Search.svg'

const Nav = styled.div`
height: 60px;
background: #fff;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`;

const NavLink = css`
color: #143a5a;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%
cursor: pointer;
text-decoration: none;
:hover{
    color: #FF9F0D;
}
`;

const Logo = styled.div`
${NavLink}
font-style: italic;
font-size: clamp(0.8rem,8vw,1.2em);
img{
    width: 50px;
}
`;

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #143a5a;
  }
  @media Screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #143a5a;
  }
  @media Screen and (max-width: 480px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #143a5a;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;
const NavMenuLink = styled.div`
${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  button {
    background-color: #ff9f0d;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 100px;
    color: #fff;
    font-family: Share Tech;
  }
  div {
    margin-right: 30px;
  }
  .img {
    width: 20px;
  }
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;


const Navbar = ({toggle})=>{
    return(
        <Nav>
            <Logo to='/'>
                <img src={Image} alt=""/>
            </Logo>
            <MenuBar onClick={toggle}/>
            <NavMenu>
            {menuData.map((item,index)=>{
                return(
                <NavMenuLink to={item.link} key={index}>
                    {item.title}
                </NavMenuLink>
            )})}
            </NavMenu>
            <NavBtn>
                <div>
                    <img src={Svg} alt="" className="img"/>
                </div>
                <button>Join us</button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar