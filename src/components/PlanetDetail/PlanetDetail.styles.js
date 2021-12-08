import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const PlanetWrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
export const PlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px 0;
  height: 100%;
  width: 100%;
  @media (min-width: 720px) {
    padding: 0 2rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    padding: 2rem 5rem;
    gap: 20px 0;
    display: grid;
    grid-template-columns: 50vw 1fr;
    grid-template-rows: 1fr 200px 50px 100px;
    margin: 50px 0;
  }
`;
export const GeologyImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;
export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  width: 100%;
  text-align: center;
  img {
    width: 60%;
  }
  ${GeologyImg} {
    width: 25%;
  }
  @media (min-width: 720px) {
    width: 100%;
    margin-top: 75px;
    img {
      width: 40%;
    }
    ${GeologyImg} {
      width: 20%;
    }
  }
  @media (min-width: 1200px) {
    margin: 0;
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/-1;
    img {
      width: 50%;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Description = styled.p`
  font-family: 'Roboto';
  line-height: 150%;
  width: 80%;
  margin: 20px auto 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Spartan', sans-serif;
  color: ${({ theme }) => theme.colors.lightGrey};
  @media (min-width: 720px) {
    margin: 0;
    flex-basis: 40%;
    text-align: left;
  }
  @media (min-width: 1200px) {
    margin-top: -20px;
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.m};
    grid-column: 2/-1;
    grid-row: 2/3;
  }
`;
export const ButtonsWrapper = styled.div`
  order: -1;
  width: 100%;
  @media (min-width: 720px) {
    order: 1;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
  @media (min-width: 1200px) {
    margin: 0;
    order: 3;
    width: 60%;
    grid-column: 2/-1;
    grid-row: 4/-1;
  }
`;
export const Source = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  margin: 0 auto;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  a {
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 0 5px;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  @media (min-width: 720px) {
    order: 2;
    width: 100%;
    justify-content: flex-start;
  }
  @media (min-width: 1200px) {
    margin-top: -80px;
    font-size: ${({ theme }) => theme.fontSize.m};
    order: 1;
    grid-column: 2/-1;
    grid-row: 3/4;
  }
`;
export const CardsWrapper = styled.div`
  margin: 30px auto 0;
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0 1rem;
  @media (min-width: 720px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    width: 80%;
    gap: 20px;
  }
`;
