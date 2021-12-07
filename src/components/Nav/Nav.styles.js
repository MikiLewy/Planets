import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1.5rem;
  border-bottom: 1px solid rgba(186, 186, 194, 0.3);
  text-transform: uppercase;
  @media (min-width: 720px) {
    text-align: center;
    flex-wrap: wrap;
  }
`;
export const Hamburger = styled.div`
  z-index: 2;
  cursor: pointer;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 720px) {
    justify-content: center;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: 20%;
  }
`;
export const StyledNav = styled.nav`
  margin-top: 7rem;
  position: absolute;
  top: 0;
  left: 100%;
  height: 200vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '100%')});
  transition: all 1s ease-in-out;
  @media (min-width: 720px) {
    margin-top: 2rem;
    position: inherit;
    height: auto;
    background-color: transparent;
    left: 0;
    transform: translateX(0);
  }
  @media (min-width: 1200px) {
    display: inline-block;
    margin-top: 0;
    width: 60%;
  }
`;
export const StyledList = styled.ul`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  gap: 20px;
  @media (min-width: 720px) {
    padding: 0.5rem 2rem;
    flex-direction: row;
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;
export const StyledLink = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: 720px) {
    img {
      display: none;
    }
  }
`;
export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
`;
