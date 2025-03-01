import React, { ReactElement, RefObject } from 'react';
import { Profile } from '../../type';
import styled from '@emotion/styled';
import { ProfileCard } from './ProfileCard';

interface ProfileModalProps {
  profile: Profile;
  isClickedModal: boolean;
  onOverlayClick: (e: React.MouseEvent) => void;
  modalRef: RefObject<HTMLDivElement>;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  padding: 0 0 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: #fff;
`;

export const ProfileModal = ({
  profile,
  isClickedModal,
  onOverlayClick,
  modalRef,
}: ProfileModalProps): ReactElement | null => {
  return isClickedModal ? (
    <Overlay onClick={onOverlayClick}>
      <Container ref={modalRef}>
        <ProfileCard profile={profile} />
      </Container>
    </Overlay>
  ) : null;
};
