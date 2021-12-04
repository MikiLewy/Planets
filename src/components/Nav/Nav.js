import React from "react";
import { StyledNav, Logo, StyledList, StyledLink } from "./Nav.styles";

import { data } from "data/data";
const Nav = () => {
  return (
    <StyledNav>
      <Logo>The Planets</Logo>
      <StyledList>
        {data.map((planet) => (
          <StyledLink
            to={`planets/${planet.name}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {planet.name}
          </StyledLink>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
