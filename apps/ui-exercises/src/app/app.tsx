import styled from '@emotion/styled';
import { useUser } from './useUser';

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

export const App = () => {
  const { users } = useUser();

  return (
    <StyledApp>
      {users.map((user, index) => {
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
  );
};
