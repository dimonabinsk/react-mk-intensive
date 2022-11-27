import { useEffect, useState } from 'react';

const SLUG = 'marvel';
const API_KEY = '1282b40e';
const BASE_URL = `https://www.omdbapi.com/?s=${SLUG}&apikey=${API_KEY}`;

function formatResponse(dataFromServer) {
  return dataFromServer.Search.map((item) => ({
    ...item,
    isFavorite: false,
  }));
}

export function useGetFilms() {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((result) => {
        const formatData = formatResponse(result);
        setFilms(formatData);
        setLoading(false);
      });
  }, []);
  // eslint-disable-next-line no-console
  // console.log(films);

  return {
    films,
    isLoading,
  };
}
