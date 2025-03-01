import styled from '@emotion/styled';
import { useUser } from './hooks/useUser';
import { Searchbar } from './components/searchbar';
import { useState, useEffect } from 'react';
import { SortingUsers } from './components/SortingUsers';
import { User } from './type';
import { useSortingUsers } from './hooks/useSortingUsers';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: 100vh;
`;

const Container = styled.div`
  border: 1px solid #000;
`;
const UserNameContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const App = () => {
  const [userSearch, setUserSearch] = useState('');
  const [sorting, setSorting] = useState<string>('asc');
  const { users } = useUser({ filteredName: userSearch });
  const { sortUsers } = useSortingUsers({ users, sorting });
  const [displayUsers, setDisplayUsers] = useState<User[]>([]);

  // if users or sorting change, sort the users
  useEffect(() => {
    setDisplayUsers(sortUsers(users, sorting));
  }, [users, sorting]);

  const handleUserSearch = (e: { target: { value: string } }) => {
    setUserSearch(e.target.value);
  };

  const handleSortChange = (newSorting: string) => {
    setSorting(newSorting);
  };

  return (
    <>
      <ItemContainer>
        <Searchbar onChange={handleUserSearch} />
        <SortingUsers users={users} onSortChange={handleSortChange} />
      </ItemContainer>
      <StyledApp>
        {displayUsers.map((user, index) => {
          return (
            <Container key={index}>
              <Image src={user.picture.large} alt={user.name.first} />
              <UserNameContiner>
                <div>{user.name.title}</div>
                <div>{user.name.last}</div>
                <div>{user.name.first}</div>
              </UserNameContiner>
              <div>Email 📩: {user.email}</div>
              <div>Location 📍: {user.location.country}</div>
            </Container>
          );
        })}
      </StyledApp>
    </>
  );
};
