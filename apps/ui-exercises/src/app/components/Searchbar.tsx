import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
`;

const InputForm = styled.input`
  width: 650px;
  height: 50px;
`;

type SearchbarProps = {
  onChange: (e: { target: { value: string } }) => void;
};

export const Searchbar = ({ onChange }: SearchbarProps): ReactElement => {
  return (
    <SearchContainer>
      <InputForm
        type="text"
        placeholder="Search..."
        onChange={(e: { target: { value: string } }) => {
          onChange(e);
        }}
      />
    </SearchContainer>
  );
};
