import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl ='https://google-search1.p.rapidapi.com/google-search';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const getResults = async (url) => {
      setLoading(true);
  
      const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'google-search1.p.rapidapi.com',
            'x-rapidapi-key': 'd30877d9eemsh52ec161170c4b9cp111f22jsn6c107090a97b'
        },
      });
  
      const data = await res.json();
  
      setResults(data);
      setLoading(false);
    };
  
    return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
        {children}
      </ResultContext.Provider>
    );
  };
  
  export const useResultContext = () => useContext(ResultContext);
