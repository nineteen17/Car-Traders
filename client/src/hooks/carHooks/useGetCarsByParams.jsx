// hooks/useFetchCarsByParams.js
import { useQuery } from 'react-query';
import axios from 'axios';

const getCarsByParams = async (params) => {
  const queryString = new URLSearchParams(params).toString(); // e.g., ?make=Audi&model=CX-3&year=2022
  const { data } = await axios.get(`http://localhost:4000/api/carsParams?${queryString}`);
  return data;
};

const useFetchCarsByParams = (params) => {
  return useQuery(['cars', params], () => getCarsByParams(params));
};

export default useFetchCarsByParams;
