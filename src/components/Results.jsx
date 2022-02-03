import React from 'react';
import { useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextprovider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  // if(isLoading) return <Loading />;
  console.log(location.pathname)

  switch (location.pathname) {
    case '/search':
      return 'Search';
  
    default:
      return 'Error!';
  }
};
