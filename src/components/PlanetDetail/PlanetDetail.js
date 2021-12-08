import React from 'react';
import {
  Wrapper,
  PlanetWrapper,
  PlanetInfo,
  ImageWrapper,
  Description,
  ButtonsWrapper,
  CardsWrapper,
  Source,
  GeologyImg,
} from './PlanetDetail.styles';
import { Button } from 'components/Button/Button';
import { Title } from 'components/Title/Title';
import { Card } from 'components/Card/Card';
import source from 'assets/images/icon-source.svg';
import { usePlanet } from 'hooks/usePlanet';

const PlanetDetail = () => {
  const { currentPlanet, handleContentChange, contentId } = usePlanet();
  return (
    <Wrapper>
      {currentPlanet.map((planet) => (
        <div key={planet.name}>
          <PlanetWrapper>
            <PlanetInfo>
              <ImageWrapper>
                {(() => {
                  if (contentId.overview || contentId.surface) {
                    return <img src={planet.images.planet} alt={planet.name} />;
                  }
                  if (contentId.structure) {
                    return <img src={planet.images.internal} alt={planet.name} />;
                  }
                })()}
                {contentId.surface ? <GeologyImg src={planet.images.geology} alt={planet.name} /> : null}
              </ImageWrapper>
              <Title>{planet.name}</Title>
              <Description>
                {(() => {
                  if (contentId.overview) {
                    return planet.overview.content;
                  }
                  if (contentId.structure) {
                    return planet.structure.content;
                  }
                  if (contentId.surface) {
                    return planet.geology.content;
                  }
                })()}
              </Description>
              <Source>
                Source
                <a
                  href={(() => {
                    if (contentId.overview) {
                      return planet.overview.source;
                    }
                    if (contentId.structure) {
                      return planet.structure.source;
                    }
                    if (contentId.surface) {
                      return planet.geology.source;
                    }
                  })()}
                >
                  Wikipedia
                  <img src={source} alt="" />
                </a>
              </Source>
              <ButtonsWrapper>
                <Button name="overview" isActive={contentId.overview} onClick={handleContentChange} color={planet.name.toLowerCase()}>
                  <span>01</span>Overview
                </Button>
                <Button name="structure" isActive={contentId.structure} onClick={handleContentChange} color={planet.name.toLowerCase()}>
                  <span>02</span>Structure
                </Button>
                <Button name="surface" isActive={contentId.surface} onClick={handleContentChange} color={planet.name.toLowerCase()}>
                  <span>03</span>Surface
                </Button>
              </ButtonsWrapper>
            </PlanetInfo>
          </PlanetWrapper>
          <CardsWrapper>
            <Card>
              <p>Rotation Time</p>
              <h3>{planet.rotation}</h3>
            </Card>
            <Card>
              <p>Revolution time</p>
              <h3>{planet.revolution}</h3>
            </Card>
            <Card>
              <p>Radius</p>
              <h3>{planet.radius}</h3>
            </Card>
            <Card>
              <p>Average Temp.</p>
              <h3>{planet.temperature}</h3>
            </Card>
          </CardsWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

PlanetDetail.propTypes = {};

export default PlanetDetail;
