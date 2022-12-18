import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px ridge rgba(0, 66, 66, 0.5);

  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 50px;
  height: 100%;
  margin: 0 25px;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.15);
  }

  @media screen and (max-width: 800px) {
    width: 40px;
    margin: 0 11px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 75%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #f37272;
  }
  @media screen and (max-width: 800px) {
    padding: 10px 10px;
  }
  &:before {
    opacity: 0;
    transform: translateY(-8px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY(8px/2);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 0.2s;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0.2s;
    }
    &:after {
      transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0s 0.2s;
    }
  }
`;
