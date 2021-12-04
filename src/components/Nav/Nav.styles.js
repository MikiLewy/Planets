import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 5rem;
  border-bottom: 1px solid rgba(186, 186, 194, 0.3);
  text-transform: uppercase;
`;
export const StyledList = styled.ul`
  display: flex;
  width: 60%;
  justify-content: space-around;
  list-style-type: none;
`;
export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
`;
