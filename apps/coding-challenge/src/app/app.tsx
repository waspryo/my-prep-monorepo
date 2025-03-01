import styled from '@emotion/styled';

import { useFetchProfiles } from './hooks/useFetchProfiles';
import { ProfileModal } from './components/ProfileModal';
import { useRef, useState } from 'react';

const StyledApp = styled.div<{ isClickedModal: boolean }>`
  display: ${({ isClickedModal }) => (isClickedModal ? 'none' : 'grid')};
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: 100vh;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const App = () => {
  const { profiles, loading, error } = useFetchProfiles();
  const [isClickedModal, setIsClickedModal] = useState<boolean>(false);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(
    null,
  );
  const modalRef = useRef<HTMLDivElement>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const isClickedModalAction = (id: string) => {
    setSelectedProfileId(id);
    setIsClickedModal(!isClickedModal);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsClickedModal(false);
    }
  };

  const filteredProfiles = profiles.find(
    (profile) => profile.id === selectedProfileId,
  );

  return (
    <>
      <StyledApp>
        {profiles.map((profile, index) => {
          return (
            <div key={index} onClick={() => isClickedModalAction(profile.id)}>
              <ImageContainer>
                <Image src={profile.picture} alt={profile.name.first} />
              </ImageContainer>
              <h3>{profile.name}</h3>
              <p>{profile.email}</p>
            </div>
          );
        })}
      </StyledApp>

      {isClickedModal && (
        <ProfileModal
          profile={filteredProfiles}
          isClickedModal={isClickedModal}
          onOverlayClick={handleOverlayClick}
          modalRef={modalRef}
        />
      )}
    </>
  );
};
