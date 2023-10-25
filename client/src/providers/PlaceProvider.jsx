import { createContext, useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';
import axios from 'axios'

export const PlaceContext = createContext([]);

export const PlaceProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPlaces = async () => {
      const { data } = await axios.get('http://localhost:8000/places');
      setPlaces(data.places);
      setLoading(false);
    };
    getPlaces();
  }, []);

  return (
    <PlaceContext.Provider value={{ places, setPlaces, setLoading, loading }}>
      {children}
    </PlaceContext.Provider>
  );
};
