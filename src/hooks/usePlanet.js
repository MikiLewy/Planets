import { useState, useEffect } from 'react';
import { data } from 'data/data';
import { useLocation } from 'react-router';

export const usePlanet = () => {
  const [currentPlanet, setCurrentPlanet] = useState([]);
  const [contentId, setCotentId] = useState({
    overview: true,
    structure: false,
    surface: false,
  });
  const { pathname } = useLocation();
  useEffect(() => {
    const matchingPlanet = data.filter((planet) => `/planets/${planet.name.toLowerCase()}` === pathname);
    setCurrentPlanet(matchingPlanet);
    console.log(typeof matchingPlanet[0].name.toLowerCase());
  }, [pathname]);

  const handleContentChange = (e) => {
    switch (e.target.name) {
      case 'overview':
        return setCotentId({
          overview: true,
          structure: false,
          surface: false,
        });
      case 'structure':
        return setCotentId({
          overview: false,
          structure: true,
          surface: false,
        });
      case 'surface':
        return setCotentId({
          overview: false,
          structure: false,
          surface: true,
        });
      default:
        return setCotentId({
          overview: true,
          structure: false,
          surface: false,
        });
    }
  };

  return {
    currentPlanet,
    handleContentChange,
    contentId,
  };
};
