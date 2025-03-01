import axios from 'axios';
import { useEffect, useState } from 'react';
import { User, UserResponse } from '../type';

type UserProps = {
  filteredName?: string;
};

export const useUser = ({ filteredName = '' }: UserProps = {}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<UserResponse>(
        `https://randomuser.me/api/?results=10`,
      );
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error fetching users', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = (filteredName: string) => {
    return users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(filteredName.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filteredName.toLowerCase()),
    );
  };

  useEffect(() => {
    void fetchUsers();
  }, []);

  useEffect(() => {
    if (filteredName) {
      // API is not supported filtering by name
      // so i filter on the client side
      setUsers(filteredUsers(filteredName));
    } else {
      void fetchUsers();
    }
  }, [filteredName]);

  return { users, loading, setUsers };
};
