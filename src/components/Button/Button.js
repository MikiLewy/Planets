import styled from 'styled-components';

const handleColorType = (color, theme) => {
  switch (color) {
    case 'mercury':
      return theme.colors.skyBlue;
    case 'venus':
      return theme.colors.lightOrange;
    case 'earth':
      return theme.colors.violet;
    case 'mars':
      return theme.colors.lightRed;
    case 'jupiter':
      return theme.colors.darkRed;
    case 'saturn':
      return theme.colors.darkOrange;
    case 'uranus':
      return theme.colors.lightBlue;
    case 'neptune':
      return theme.colors.blue;
    default:
      return 'transparent';
  }
};

export const Button = styled.button`
  cursor: pointer;
  width: 33%;
  padding: 2rem 0rem;
  background-color: transparent;
  text-transform: uppercase;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.lightGrey)};
  border: none;
  border-bottom: 1px solid ${({ isActive, color, theme }) => (isActive ? handleColorType(color, theme) : 'rgba(186, 186, 194, 0.3)')};
  font-weight: bold;
  letter-spacing: 1px;
  @media (min-width: 720px) {
    text-align: left;
    padding: 0.75rem 1rem;
    width: 100%;
    border: 1px solid rgba(186, 186, 194, 0.3);
    background-color: ${({ isActive, color, theme }) => (isActive ? handleColorType(color, theme) : 'transparent')};
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
