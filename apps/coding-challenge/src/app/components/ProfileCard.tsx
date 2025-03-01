import styled from '@emotion/styled';
import { Profile } from '../../type';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

type ProfileCardProps = {
  profile: Profile;
};

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <>
      <StyledImage src={profile.picture} />
      <div>{profile.name}</div>
      <div>
        <div>{profile.location}</div>
      </div>
      <div>{profile.phone}</div>
    </>
  );
};
