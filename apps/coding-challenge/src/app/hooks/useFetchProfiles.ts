import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchProfiles } from '../slices/profilesSlice';

export const useFetchProfiles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profiles, loading, error } = useSelector(
    (state: RootState) => state.profiles,
  );

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  return { profiles, loading, error };
};
