import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PlanetDetail = () => {
  return (
    <Wrapper>
      <div>
        <img src="" alt="" />
        <div>
          <h2>Planet</h2>
          <p>description</p>
          <p>
            source <a href=""></a>
          </p>
          <button>
            <span>1</span>Overview
          </button>
          <button>
            <span>1</span>Overview
          </button>
          <button>
            <span>1</span>Overview
          </button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p>Info</p>
          <h3>243 days</h3>
        </div>
        <div className="card">
          <p>Info</p>
          <h3>243 days</h3>
        </div>
        <div className="card">
          <p>Info</p>
          <h3>243 days</h3>
        </div>
        <div className="card">
          <p>Info</p>
          <h3>243 days</h3>
        </div>
      </div>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
  padding: 5rem 10rem;
  color: ${({ theme }) => theme.colors.white};
`;

PlanetDetail.propTypes = {};

export default PlanetDetail;
