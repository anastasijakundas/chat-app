import { useLocation } from 'react-router-dom';

export const useUser = () => {
  const user = localStorage.getItem('user');

  return JSON.parse(user);
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
