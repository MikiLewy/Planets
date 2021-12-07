import styled from 'styled-components';
export const Title = styled.h2`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (min-width: 720px) {
    flex-basis: 100%;
    text-align: left;
  }
  @media (min-width: 1200px) {
    margin-top: 0;
    width: 40%;
    flex-basis: 40%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
