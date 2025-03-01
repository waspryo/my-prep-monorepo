import { User } from '../type';

type SortingUsersProps = {
  users: User[];
  sorting?: string;
};

export const useSortingUsers = ({ users, sorting }: SortingUsersProps) => {
  const sortUsers = (users: User[], sortOrder: string) => {
    const sortedList = [...users];

    if (sortOrder === 'asc') {
      sortedList.sort((a, b) => {
        if (a.name.last < b.name.last) return -1;
        if (a.name.last > b.name.last) return 1;
        return 0;
      });
    } else {
      sortedList.sort((a, b) => {
        if (a.name.last < b.name.last) return 1;
        if (a.name.last > b.name.last) return -1;
        return 0;
      });
    }

    return sortedList;
  };

  return { sortUsers };
};
