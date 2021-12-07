import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 2rem;
  border: 1px solid rgba(186, 186, 194, 0.3);
  @media (min-width: 720px) {
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
    padding: 1rem;
  }
  @media (min-width: 1200px) {
    padding: 1.25rem;
    gap: 5px;
  }
  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-family: 'Roboto';
    font-weight: bold;
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  h3 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.m};
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;
