import axios from 'axios';
import { useEffect, useState } from 'react';
import { User, UserResponse } from './type';

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<UserResponse>(
        'https://randomuser.me/api/?results=10',
      );
      setUsers(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
};
