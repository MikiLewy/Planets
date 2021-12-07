import React, { useState } from 'react';
import { LogoWrapper, Logo, StyledNav, StyledList, StyledLink, Hamburger, Wrapper } from './Nav.styles';
import hamburger from 'assets/images/icon-hamburger.svg';
import chevron from 'assets/images/icon-chevron.svg';
import { data } from 'data/data';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>The Planets</Logo>
          <Hamburger onClick={() => setIsOpen((prevState) => !prevState)}>
            <img src={hamburger} alt="" />
          </Hamburger>
        </LogoWrapper>
        <StyledNav isOpen={isOpen}>
          <StyledList>
            {data.map((planet) => (
              <>
                <StyledLink to={`planets/${planet.name}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                  <div>
                    <div key={planet.name}>
                      <img src={planet.images.ball} alt={planet.name} />
                      {planet.name}
                    </div>
                    <img src={chevron} alt="" />
                  </div>
                </StyledLink>
              </>
            ))}
          </StyledList>
        </StyledNav>
      </Wrapper>
    </>
  );
};

export default Nav;
