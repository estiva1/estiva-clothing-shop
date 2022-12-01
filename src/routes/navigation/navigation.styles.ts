import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  --navigation-container-height: 70px;
  height: var(--navigation-container-height);
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  --logo-container-height: 17px;
  display: flex;
  height: var(--logo-container-height);
  width: auto;
  margin: calc(
      (var(--navigation-container-height) - var(--logo-container-height)) / 2
    )
    10px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  &:hover {
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
