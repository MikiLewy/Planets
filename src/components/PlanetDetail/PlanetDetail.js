import React from 'react';
import { Wrapper, PlanetWrapper, PlanetInfo, ImageWrapper, Description, ButtonsWrapper, CardsWrapper, Source } from './PlanetDetail.styles';
import { Button } from 'components/Button/Button';
import { Title } from 'components/Title/Title';
import { Card } from 'components/Card/Card';
import earth from 'assets/images/planet-earth.svg';
import source from 'assets/images/icon-source.svg';

const PlanetDetail = () => {
  return (
    <Wrapper>
      <PlanetWrapper>
        <PlanetInfo>
          <ImageWrapper>
            <img src={earth} alt="" />
          </ImageWrapper>
          <Title>Planet</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse harum? Ea, consequuntur quibusdam quasi voluptatem cum quo rem officiis
            ab, debitis iste voluptatibus facere molestias vel nisi, tenetur laborum. Molestiae facilis, quo possimus ex eius quisquam suscipit unde
            laborum tempore necessitatibus debitis iusto maxime repellendus
          </Description>
          <Source>
            Source
            <a href="#">
              Wikipedia
              <img src={source} alt="" />
            </a>
          </Source>
          <ButtonsWrapper>
            <Button>
              <span>01</span>Overview
            </Button>
            <Button>
              <span>02</span>Structure
            </Button>
            <Button>
              <span>03</span>Surface
            </Button>
          </ButtonsWrapper>
        </PlanetInfo>
      </PlanetWrapper>
      <CardsWrapper>
        <Card>
          <p>Rotation Time</p>
          <h3>243 days</h3>
        </Card>
        <Card>
          <p>Revolution time</p>
          <h3>243 days</h3>
        </Card>
        <Card>
          <p>Radius</p>
          <h3>243 days</h3>
        </Card>
        <Card>
          <p>Average Temp.</p>
          <h3>243 days</h3>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

PlanetDetail.propTypes = {};

export default PlanetDetail;
