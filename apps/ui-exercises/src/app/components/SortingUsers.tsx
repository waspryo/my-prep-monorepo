import React, { ReactElement, useState } from 'react';
import { User } from '../type';

type SortingUsersProps = {
  users: User[];
  onSortChange: (sorting: string) => void;
};

export const SortingUsers = ({
  onSortChange,
}: SortingUsersProps): ReactElement => {
  const [sorting, setSorting] = useState<string>('asc');

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSorting = e.target.value;
    setSorting(newSorting);
    onSortChange(newSorting);
  };

  return (
    <div>
      <select onChange={handleSorting} value={sorting}>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
  );
};
