import styled from 'styled-components';
export const Button = styled.button`
  cursor: pointer;
  width: 33%;
  padding: 2rem 0rem;
  background-color: transparent;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  border-bottom: 1px solid rgba(186, 186, 194, 0.3);
  font-weight: bold;
  letter-spacing: 1px;
  @media (min-width: 720px) {
    text-align: left;
    padding: 0.75rem 1rem;
    width: 100%;
    border: 1px solid rgba(186, 186, 194, 0.3);
  }
  @media (min-width: 1200px) {
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  span {
    display: none;
    margin-right: 10px;
    @media (min-width: 720px) {
      display: inline;
    }
  }
`;
